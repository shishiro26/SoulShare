import Navbar from '../Components/Navbar'
import { NavLink } from 'react-router-dom'
import ShareSocials from "../Components/ShareSocials";
import CardClothes from '../Components/CardClothes';
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Loader from '../Components/Loader';
import ImageModal from '../Components/modal/ImageModal';
import { toast } from "react-toastify";
import '../index.css'
import "react-toastify/dist/ReactToastify.css";


const Profile = () => {
    
    const [userData, setUserData] = useState({});
    const [loadingUser, setLoadingUser] = useState(true);
    const [loadingWeather, setLoadingWeather] = useState(true);
    const [loadingCardData, setLoadingCardData] = useState(true);
    const [location, setLocation] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [cardData, setCardData] = useState({})
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    const API_endpoint = 'https://api.openweathermap.org/data/2.5/weather?';

    const fetchData = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/auth/userInfo/${Cookies.get('userId')}`, {
                method: "GET",
                credentials: 'include',
            });
            const data = await response.json();
            setUserData(data);
            setLoadingUser(false);
            console.log(data)
        } catch (error) {
            console.error('Error fetching user data:', error);
            setLoadingUser(false);
        }
    };

    const fetchWeatherData = async () => {
        try {
            if (userData.data.latitude && userData.data.longitude) {
                const weatherResponse = await fetch(
                    `${API_endpoint}lat=${userData.data.latitude}&lon=${userData.data.longitude}&exclude=hourly,daily&appid=${import.meta.env.VITE_API_KEY}`
                );
                const weatherData = await weatherResponse.json();
                setLocation({
                    weather: {
                        country: weatherData.sys.country,
                        city: weatherData.name
                    }
                });
                setLoadingWeather(false);
            } else {
                setLoadingWeather(false);
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setLoadingWeather(false);
        }
    };

    const fetchCardData = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/product/get/${Cookies.get("userId")}`, {
                method: "GET",
                credentials: "include"
            })
            const data = await response.json()
            setCardData(data);
            console.log(data)
        } catch (error) {
            console.log("Error", error.message)
            toast.error(error.message);
        } finally {
            setLoadingCardData(false);
        }
    }

    useEffect(() => {
        fetchData();
        fetchCardData()
    }, []);

    useEffect(() => {
        if (!loadingUser) {
            fetchWeatherData();
        }
    }, [loadingUser]);


    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };



    return (
        <>
            {loadingUser ?
                <Loader />
                :
                <div className='flex flex-row justify-between bg-gray-900' >
                    <Navbar />
                    <div>
                        <div className='p-4 '>
                            <h2 className='text-lg font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline'>Profile</h2>
                        </div>
                        <div className='p-3 flex flex-row items-start bg-gray-900'>
                            <div className='bg-gray-900 p-3 border-b-4 border-green-400 max-w-sm'>
                                <div className='image overtflow-hidden'>
                                    {userData.data.image.startsWith("https://api.dicebear.com/5.x/initials/svg?seed") ? (
                                        <img
                                            className="h-auto w-full mx-auto"
                                            src={userData.data.image}
                                            alt="profile"
                                        />
                                    ) : (
                                        <img
                                            className="h-auto w-full mx-auto"
                                            src={`data:image/png;base64,${userData.data.image}`}
                                            alt="profile"
                                        />
                                    )}
                                    <div className='bg-gray-900 p-3 border-b-4 border-green-400 max-w-sm'>
                                        <div className='image overflow-hidden'>
                                            {userData.data.image.startsWith("data:image/png;base64,") ||
                                                userData.data.image.startsWith("https://api.dicebear.com/5.x/initials/svg?seed") ? (
                                                <img
                                                    className="h-auto w-full mx-auto"
                                                    src={userData.data.image}
                                                    alt="profile"
                                                />
                                            ) : (
                                                <p>No image available</p>
                                            )}
                                        </div>
                                    </div>


                                </div>
                                {(userData.data.email === 'bannu1302@gmail.com' || userData.data.email === 'dheeravathshishiro@gmail.com' || userData.data.email === 'lcs2022014@iiitl.ac.in') ? (
                                    <>
                                        <h1 className='uppercase text-white font-semibold text-xl leading-8 my-1'>{userData.data.UserName}</h1>
                                        <h3 className="text-white font-lg text-semibold leading-6">CEO of Soulshare</h3>
                                        <p className="text-sm text-slate-200 hover:text-white leading-6">
                                            Hi there! I'm Shishiro, and welcome to my personal project. Soulshare is a platform where people can come together to share their passions, creativity, and knowledge. Whether you're into fashion, food, or other exciting endeavors, this space is for you. Join our vibrant community and explore a world of endless possibilities. Let's inspire, connect, and grow together!
                                        </p>
                                    </>
                                )
                                    :
                                    <h1 className='uppercase text-white font-semibold text-xl leading-8 my-1'>{userData.data.UserName}</h1>

                                }
                                <div className="m-1">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="z-1 px-5 py-3 text-base font-semibold text-center text-white bg-[#51D6FF] rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-[#51D6FF] dark:hover:bg-[#37FF8B] dark:focus:ring-blue-800 transition duration-500 ease-in-out"
                                        onClick={() => (modalOpen ? close() : open())}
                                    >
                                        Update Image
                                    </motion.button>
                                    <AnimatePresence initial={false} onExitComplete={() => null}>
                                        {modalOpen && <ImageModal modalOpen={modalOpen} handleClose={close} />}
                                    </AnimatePresence>
                                </div>


                            </div>
                            <div className="mx-5 bg-gray-900 p-3 shadow-sm rounded-sm ">
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 text-white">
                                    <span className="text-green-500">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <span className="tracking-wide">About</span>
                                </div>
                                <div>
                                    <div className="text-white rounded-sm border-b-4 border-green-400">
                                        <div className="grid md:grid-cols-2 text-sm">
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">First Name</div>
                                                <div className="px-4 py-2 capitalize">{userData.data.firstName}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">Last Name</div>
                                                <div className="px-4 py-2 capitalize">{userData.data.lastName}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">Contact No.</div>
                                                <div className="px-4 py-2 capitalize">+91 {userData.data.Number}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">Email.</div>
                                                <div className="px-4 py-2">
                                                    <a className="text-blue-800 " href={userData.data.email}>{userData.data.email}</a>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">Joined on</div>
                                                <div className="px-4 py-2 select-all">{formatDate(userData.data.createdAt)}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">Birthday</div>
                                                <div className="px-4 py-2">NA</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">Location</div>
                                                {loadingWeather ?
                                                    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                    </svg>
                                                    :
                                                    <div className="px-4 py-2">{location.weather.city},{location.weather.country}</div>
                                                }
                                                {/* <div className='px-4 py-2'> india</div> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <ul >
                                            <li className="inline-block text-[35px] ml-[10px] px-[0px] py-[10px] list-none after:block after:content-[''] after:z-[-1] after:h-[10px] after:border-b-[1px] after:border-[#00FFFF] after:border-solid after:scale-x-[0] after:ease-in-out after:duration-300 after:transition-[transform] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:bg-[#37FF8B] hover:after:z-[-1] hover:after:opacity-[0.3] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:bg-[#37FF8B] hover:after:z-[-1] hover:after:opacity-[0.3]">
                                                <NavLink
                                                    data-navbar-item="true"
                                                    className="p-[16px] font-[500] text-base no-underline relative transition-all hover:text-[#37FF8B]   font-semibold"
                                                    aria-current=""
                                                    to="/browse"
                                                >
                                                    PRODUCTS
                                                </NavLink>
                                            </li>
                                            <li className="inline-block text-[35px] ml-[10px] px-[0px] py-[10px] list-none after:block after:content-[''] after:z-[-1] after:h-[10px] after:border-b-[1px] after:border-[#00FFFF] after:border-solid after:scale-x-[0] after:ease-in-out after:duration-300 after:transition-[transform] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:bg-[#37FF8B] hover:after:z-[-1] hover:after:opacity-[0.3] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:bg-[#37FF8B] hover:after:z-[-1] hover:after:opacity-[0.3]">
                                                <NavLink
                                                    data-navbar-item="true"
                                                    className="p-[16px] font-[500] text-base no-underline relative transition-all hover:text-[#37FF8B]   font-semibold"
                                                    aria-current=""
                                                    to="/browse"
                                                >
                                                    LIKED
                                                </NavLink>
                                            </li>
                                        </ul>
                                        {
                                            loadingCardData ? <Loader /> :
                                                <div className='overflow-auto max-h-[300px]'>
                                                    <ul className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                                        {cardData.map((data, index) => (
                                                            <li key={index} className="m-5">
                                                                <CardClothes
                                                                    userName={data.userName}
                                                                    role={data.productType}
                                                                    image={data.productImage}
                                                                    distance={data.distance}
                                                                />
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ShareSocials />
                </div>

            }

        </>


    )
}

export default Profile
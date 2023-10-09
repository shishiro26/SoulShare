import Navbar from '../Components/Navbar'
import { NavLink } from 'react-router-dom'
import ShareSocials from "../Components/ShareSocials";
import CardClothes from '../Components/CardClothes';
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Loader from '../Components/Loader';

const Profile = () => {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);


    const fetchData = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/auth/userInfo/${Cookies.get('userId')}`, {
                method: "GET",
                credentials: 'include',
            });
            const data = await response.json();
            setUserData(data);
            setLoading(false);

        } catch (error) {
            console.log(error.message)
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchData();
        console.log("This is shishiro")
    }, []);

    const cardClothesData = [
        { userName: `User123`, distance: 120, roles: "food" },
        { userName: "Fashionista", distance: 20, roles: "food" },
        { userName: "Trendsetter", distance: 50, roles: "medicines" },
        { userName: "Trendsetter", distance: 50, roles: "other" },
        { userName: "tharun", distance: 50, roles: "food" },
        { userName: "Trendsetter", distance: 50, roles: "other" },
        { userName: "Trendsetter", distance: 50, roles: "other" },
        { userName: "Trendsetter", distance: 50, roles: "other" },
        { userName: "Trendsetter", distance: 50, roles: "other" },
    ];

    return (
        <>
            {loading ?
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
                                    <img className="h-auto w-full mx-auto"
                                        src={userData.data.image}
                                        alt="profile"
                                    />
                                </div>
                                <h1 className='uppercase text-white font-semibold text-xl leading-8 my-1'>{userData.data.UserName}</h1>
                                <h3 className="text-white font-lg text-semibold leading-6">CEO of Soulshare</h3>

                                <p className="text-sm text-slate-200 hover:text-white leading-6">Lorem ipsum dolor sit ame  consectetur adipisicing elit. Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
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
                                                <div className="px-4 py-2">{userData.data.firstName}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">Last Name</div>
                                                <div className="px-4 py-2">{userData.data.lastName}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">Contact No.</div>
                                                <div className="px-4 py-2">+91 {userData.data.Number}</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">Email.</div>
                                                <div className="px-4 py-2">
                                                    <a className="text-blue-800" href={userData.data.email}>{userData.data.email}</a>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">Joined on</div>
                                                <div className="px-4 py-2">Oct 02, 2023</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">Birthday</div>
                                                <div className="px-4 py-2">Oct 02, 2023</div>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="px-4 py-2 font-semibold">Current Address</div>
                                                <div className="px-4 py-2">India</div>
                                            </div>
                                            <div className="m-1">
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    type="submit"
                                                    className=" w-full px-5 py-3 text-base font-semibold text-center text-white bg-[#51D6FF] rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-[100%] lg:w-[100%] dark:bg-[#51D6FF] dark:hover:bg-[#37FF8B] dark:focus:ring-blue-800 transition duration-500 ease-in-out"
                                                >
                                                    Edit Profile
                                                </motion.button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <ul >
                                            <li className="inline-block text-[35px] ml-[10px] px-[0px] py-[10px] list-none after:block after:content-[''] after:z-[-1] after:h-[10px] after:border-b-[1px] after:border-[#00FFFF] after:border-solid after:scale-x-[0] after:ease-in-out after:duration-300 after:transition-[transform] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:bg-[#37FF8B] hover:after:z-[-1] hover:after:opacity-[0.3] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:bg-[#37FF8B] hover:after:z-[-1] hover:after:opacity-[0.3]">
                                                <NavLink
                                                    data-navbar-item="true"
                                                    className="p-[16px] font-[500] text-base no-underline relative transition-all hover:text-[#37FF8B]  z-[80] font-semibold"
                                                    aria-current=""
                                                    to="/browse"
                                                >
                                                    PRODUCTS
                                                </NavLink>
                                            </li>
                                            <li className="inline-block text-[35px] ml-[10px] px-[0px] py-[10px] list-none after:block after:content-[''] after:z-[-1] after:h-[10px] after:border-b-[1px] after:border-[#00FFFF] after:border-solid after:scale-x-[0] after:ease-in-out after:duration-300 after:transition-[transform] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:bg-[#37FF8B] hover:after:z-[-1] hover:after:opacity-[0.3] hover:after:scale-x-[1] hover:after:translate-y-[-15px] hover:after:translate-x-[14px] hover:after:bg-[#37FF8B] hover:after:z-[-1] hover:after:opacity-[0.3]">
                                                <NavLink
                                                    data-navbar-item="true"
                                                    className="p-[16px] font-[500] text-base no-underline relative transition-all hover:text-[#37FF8B]  z-[80] font-semibold"
                                                    aria-current=""
                                                    to="/browse"
                                                >
                                                    LIKED
                                                </NavLink>
                                            </li>
                                        </ul>
                                        <div className='overflow-auto max-h-[300px]'>
                                            <ul className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                                {cardClothesData.map((data, index) => (
                                                    <li key={index} className="m-5">
                                                        <CardClothes
                                                            userName={data.userName}
                                                            distance={data.distance}
                                                            role={data.roles}
                                                        />
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
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
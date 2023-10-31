import Navbar from '../Components/Navbar'
import { motion } from 'framer-motion'
import CardClothes from '../Components/CardClothes';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Loader from '../Components/Loader';
import Cookies from 'js-cookie';

const CardPage = () => {
    const { productId } = useParams();
    const [cardData, setCardData] = useState({});
    const [similarData, setSimilarData] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const [similarProductsLoading, setSimilarProductsLoading] = useState(true);
    const [formData, setFormData] = useState({
        comment: ""
    })
    const location = useLocation();
    const productType = new URLSearchParams(location.search).get('productType');

    const dishDetails = {
        title: 'Biryani',
        chef: 'Shishiro',
        likes: 25,
        description: 'Delicious Biryani dish made with the finest ingredients. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae exercitationem porro saepe ea harum corrupti vero id laudantium enim, libero blanditiis expedita cupiditate a est.',
        imageUrl: 'https://example.com/biryani-image.jpg',
    };
    const fetchData = async () => {
        try {
            setSimilarProductsLoading(true);
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/product/category/?productType=${productType}`, {
                method: "GET",
                credentials: "include"
            });
            const data = await response.json();
            setSimilarData(data);
            console.log("Products fetched successfully");
        } catch (error) {
            console.error("Error", error.message);
        } finally {
            setSimilarProductsLoading(false);
        }
    };


    const fetchCardData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/product/getSingle/${productId}`, {
                method: "GET",
                credentials: 'include',
            });

            const data = await response.json()
            setCardData(data)
        } catch (error) {
            console.log("Error while fetching the data");
        }
        finally {
            setIsLoading(false);
        }
    }

    const addComment = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/product/comment/${productId}/${Cookies.get('userId')}`, {
                method: 'POST',
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.error("Error while adding the comment", error);
        }
    };


    useEffect(() => {
        fetchCardData();
        fetchData()
    }, [productId]);


    const comments = [
        {
            id: 1,
            author: 'Michael Gough',
            date: 'Feb. 8, 2022',
            content: 'Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.',
        },
        {
            id: 2,
            author: 'Jese Leos',
            date: 'Feb. 12, 2022',
            content: 'The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.',
        },
        {
            id: 3,
            author: 'Bonnie Green',
            date: 'Mar. 12, 2022',
            content: 'The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.',
        },
        {
            id: 4,
            author: 'Helene Engels',
            date: 'Jun. 23, 2022',
            content: 'Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.',
        },
    ];
    const cardClothesData = [
        { productName: 'Biryani', userName: `Bala`, distance: 120, roles: "food" },
        { productName: 'POLO', userName: "Saketh", distance: 20, roles: "clothes" },
        { productName: 'Citrazen', userName: "DOLO", distance: 50, roles: "medicine" },
        { productName: 'Phone', userName: "Akhil", distance: 50, roles: "other" },
        { productName: 'Mutton', userName: "tharun", distance: 50, roles: "food" },
        { productName: 'Denim', userName: "Bala", distance: 50, roles: "clothes" },
        { productName: 'Dolo', userName: "Sheshu", distance: 50, roles: "medicine" },
        { productName: 'Biryani', userName: "Trendsetter", distance: 50, roles: "food" },
    ];


    return (
        <div className='flex flex-row bg-gray-800  '>
            <Navbar />
            <div className="antialiased bg-gray-800 overflow-x-auto max-w-screen-xl mx-auto">
                <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6" initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h1 className='text-xl m-5 inline-flex items-center justify-center rounded-lg cursor-pointer bg-[#51D6FF]  hover:bg-[#37FF8B] p-3 '>
                        <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="24" fill='#fff'>
                            <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
                        </svg>
                        BACK
                    </h1>
                    <div className="flex flex-col items-center justify-center md:flex-row -mx-4 bg-gray-800 rounded-lg">
                        <div className="p-4 border-b-4 border-[#37FF8B] rounded-md">
                            <div className='h-64 md:h-80 rounded-lg mb-4'>
                                <img
                                    src={`data:image/png;base64,${cardData.productImage}`}
                                    alt=''
                                    className='h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center ' />
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="mb-2 leading-tight tracking-tight font-bold text--800 text-2xl md:text-3xl">{cardData.productName}</h2>
                            <p className="text-gray-500 text-sm">By <a href="#" className="text-[#37FF8B] hover:underline">{cardData.userName}</a></p>
                            <p className="text-gray-500 ">{cardData.description}</p>

                            <div className="flex py-4 space-x-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.9 }}
                                    type="submit"
                                    className="dark:hover:bg-[#37FF8B] dark:focus:ring-blue-800 transition duration-500 ease-in-out h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white dark:bg-[#51D6FF]"
                                >
                                    Interested
                                </motion.button>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <aside>
                            <h2 className="max-w-5xl m-4 text-lg lg:text-2xl font-bold text-gray-800 dark:text-white">Similar Products</h2>
                            {
                                similarProductsLoading ?
                                    <Loader />
                                    :
                                    <div className="flex space-x-4 p-2 overflow-x-auto">
                                        <div className="flex" style={{ width: `${cardClothesData.length * 320}px` }}>
                                            {similarData.map((data, index) => (
                                                <div key={index} className="w-80 mx-4">
                                                    <CardClothes
                                                        productId={data._id}
                                                        productName={data.productName}
                                                        userName={data.userName}
                                                        distance={60}
                                                        role={data.productType}
                                                        image={data.productImage}
                                                        createdAt={data.createdAt}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                            }

                        </aside>
                        <section className="max-h-[500px] overflow-y-auto bg-white dark:bg-gray-800 rounded-lg py-4 antialiased">
                            <div className="max-w-2xl mx-auto px-4">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion ({comments.length})</h2>
                                </div>
                                <form className="mb-6" onSubmit={addComment}>
                                    <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                                        <label htmlFor="comment" className="sr-only">Your comment</label>
                                        <textarea
                                            id="comment"
                                            rows="6"
                                            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800 resize-none"
                                            placeholder="Write a comment..."
                                            value={formData.comment}
                                            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                                            required
                                        ></textarea>

                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.9 }}
                                        type="submit"
                                        className="dark:hover:bg-[#37FF8B] dark:focus:ring-blue-800 transition duration-500 ease-in-out h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white dark:bg-[#51D6FF]"
                                    >
                                        Post comment
                                    </motion.button>
                                </form>
                                {comments.map(comment => (
                                    <article key={comment.id} className="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                                        <footer className="flex justify-between items-center mb-2">
                                            <div className="flex items-center">
                                                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                                                    <img className="mr-2 w-6 h-6 rounded-full"
                                                        src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimMDuMEMZWRWmAqL1It9mF1Nw1o_iMY2UVQ&usqp=CAU`}
                                                        alt={comment.author} />
                                                    {comment.author}
                                                </p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400"><time dateTime={comment.date} title={comment.date}>{comment.date}</time></p>
                                            </div>
                                        </footer>
                                        <p className="text-gray-500 dark:text-gray-400">{comment.content}</p>
                                    </article>
                                ))}
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div >

    );
};

export default CardPage;
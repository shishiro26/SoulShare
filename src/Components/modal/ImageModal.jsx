import { motion } from "framer-motion";
import dropIn from "./dropIn";
import Cookies from "js-cookie";
import { useState } from "react";


const ImageModal = ({ handleClose }) => {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false)

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("image", image);
            setLoading(true);
            await fetch(
                `${import.meta.env.VITE_BASE_URL}/api/auth/updateImage/${Cookies.get(
                    "userId"
                )}`,
                {
                    method: "POST",
                    credentials: "include",
                    body: formData,
                }
            );
            window.location.reload()
            // Handle successful upload, update UI or close modal
        } catch (error) {
            console.error("Error while updating the image", error);
        } finally {
            setLoading(false)
        }
    };



    return (
        <div
            onClick={handleClose}
            className="z-40 fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
            <section className="space-y-10">
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800"
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"

                >
                    <h1 className="m-4 text-4xl font-bold text-gray-600 mb-4 text-4xl  tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-[white]">
                        Update Image                    </h1>
                    <form action="POST" onSubmit={handleSubmit}
                        className="m-6 space-y-6" autoComplete="off">

                        <div>
                            <label
                                className="block mb-2 text-sm font-medium text-medium dark:text-white"
                                htmlFor="file_input"
                            >
                                Upload Image
                            </label>
                            <input
                                onChange={handleImageChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-[100%]  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                id="file_input"
                                type="file"
                            />
                        </div>
                        <div className="flex  justify-between">
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleClose}
                                className=" px-5 py-3 text-base font-semibold text-center text-white bg-[#51D6FF] rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  dark:bg-[#51D6FF] dark:hover:bg-[#37FF8B] dark:focus:ring-blue-800 transition duration-500 ease-in-out "
                            >
                                Add Image
                            </motion.button>
                            <button
                                onClick={handleClose}
                                className="px-5 py-3 text-base font-semibold text-center text-white bg-[#51D6FF] rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  dark:bg-[#51D6FF] dark:hover:bg-[#37FF8B] dark:focus:ring-blue-800 transition duration-500 ease-in-out"
                            >
                                Close
                            </button>
                        </div>
                    </form>

                </motion.div>
            </section>
        </div>
    );
};

export default ImageModal;

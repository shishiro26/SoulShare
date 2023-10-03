import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ShareSocials from '../Components/ShareSocials'
import Navbar from "../Components/Navbar";
import notFound from "../assets/404 Error-bro.png"
// import internalError from '../assets/internal server.png'

const PageNotFound = () => {
    return (
        <div className="flex flex-row justify-between">
            <Navbar />
            <motion.div
                className="flex flex-col items-center justify-center h-[90vh]"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <img src={notFound} alt="not found" height={500} width={500} />

                <h1 className="text-4xl text-green-500 font-bold mb-4 animate-bounce delay-1000">
                    Page Not Found
                </h1>

                <p className="text-lg mb-8">
                    Oops! The page you are looking for does not exist.
                </p>
                <Link
                    to="/"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        type="submit"
                        className="w-auto px-5 py-3 text-base font-semibold text-center text-white bg-[#37FF8B] rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-[100%] lg:w-[100%] dark:bg-[#37FF8B] dark:hover:bg-[#51D6FF] dark:focus:ring-blue-800 transition duration-500 ease-in-out"
                    >
                        Go back to homepage
                    </motion.button>
                </Link>

            </motion.div>
            <ShareSocials />
        </div >

    );
};

export default PageNotFound;

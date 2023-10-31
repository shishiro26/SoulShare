import { useRef, useState } from "react";
import { motion } from 'framer-motion';
import "react-toastify/dist/ReactToastify.css";
import '../index.css';
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const OtpBox = () => {
    const navigate = useNavigate()
    const { userId } = useParams();
    const inputRefs = Array.from({ length: 6 }, () => useRef(null));
    const [otp, setOtp] = useState(new Array(6).fill(""));

    const handleInputChange = (index, e) => {
        if (e.target.value && index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
        }
        const newOtp = [...otp];
        newOtp[index] = e.target.value;
        setOtp(newOtp);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const otpValue = otp.join("");
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/auth/otp/verifymail`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ otp: otpValue, email: Cookies.get('email') })
            });
            if (response.ok) {
                navigate('/')
                toast.success('Email verification successful!');
            } else {
                console.error('Email verification failed.');
                toast.error("OTP is invalid")
            }
        } catch (error) {
            console.error('Error verifying email:', error);
            console.log("ther status code is ", error.status);
            toast('Error creating an account!', {
                position: toast.POSITION.TOP_RIGHT,
                className: 'toast-message'
            });
        }
    };

    const handleResend = async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_BASE_URL}/api/auth/otp/resend/${Cookies.get('userId')}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.ok) {
                toast("OTP resent successfully!", {
                    position: toast.POSITION.TOP_RIGHT,
                    className: "toast-message",
                });
            } else {
                console.error("Failed to resend OTP.");
                toast("Error resending OTP. Please try again later.", {
                    position: toast.POSITION.TOP_RIGHT,
                    className: "toast-message",
                });
            }
        } catch (error) {
            console.error("Error resending OTP:", error);
            toast("Error resending OTP. Please try again later.", {
                position: toast.POSITION.TOP_RIGHT,
                className: "toast-message",
            });
        }
    };
    return (
        <>
            <div className="bg-gray-900 relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
                <div className="relative bg-gray-800 px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
                    <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                        <div className="flex flex-col items-center justify-center text-center space-y-2">
                            <div className="font-semibold text-3xl">
                                <p>Email Verification</p>
                            </div>
                            <div className="flex flex-row text-sm font-medium text-gray-400">
                                <p>We have sent a code to your email {Cookies.get('email')}</p>
                            </div>
                        </div>

                        <div>
                            <form method="post" onSubmit={handleSubmit}>
                                <div className="flex flex-col space-y-16">
                                    <div className="flex flex-row items-center justify-between mx-auto w-full max-w-s">
                                        {inputRefs.map((inputRef, index) => (
                                            <div key={index} className="w-16 h-16">
                                                <input
                                                    ref={inputRef}
                                                    className="mx-0.5 w-full h-full flex flex-col items-center justify-center text-center outline-none  bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-xl focus:ring-blue-500 focus:border-blue-500 block  sm:w-[100%]  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    type="text"
                                                    maxLength="1"
                                                    onChange={(e) => handleInputChange(index, e)}
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-col space-y-5">
                                        <div>
                                            <motion.button
                                                type="submit"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="flex flex-row items-center justify-center text-center w-full  py-5 text-base font-semibold text-center text-white bg-[#51D6FF] rounded-xl hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-[#51D6FF] dark:hover:bg-[#37FF8B] dark:focus:ring-blue-800 transition duration-500 ease-in-out"
                                            >
                                                Verify Account
                                            </motion.button>
                                        </div>

                                        <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                            <p>Didn`t recieve code?</p>
                                            <button className="flex flex-row items-center text-blue-600 hover:underline" onClick={handleResend}>Resend</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OtpBox
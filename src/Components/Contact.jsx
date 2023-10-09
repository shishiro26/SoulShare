import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { useState } from 'react'
import { toast } from 'react-toastify';

const Contact = () => {
    const [formData, setFormData] = useState({
        UserName: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({
            UserName: '',
            email: '',
            message: '',
        });
        toast("Mail sent successfully!!")
    }
    return (
        <>
            <div className="relative isolate px-6 pt-14 lg:px-8 w-[100%]" id='contact-link'>
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />
                </div>
                <section>
                    <div className="py-8 px-4 mx-auto max-w-[100%] lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                        <div className="flex flex-col justify-center">
                            <h3 className="text-4xl font-bold text-gray-600 mb-4 text-4xl tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-[white]">
                                connect with SoulShare:
                                <br />
                                <span className="text-4xl font-bold text-gray-600 mb-4 text-4xl  tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-[#51D6FF]">
                                    <Typewriter
                                        words={["Share", "Care", "Make a Difference!"]}
                                        loop={5}
                                        cursor
                                        cursorStyle="_"
                                        typeSpeed={90}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </h3>
                            <p className="mb-6 text-lg font-normal text-gray-500 dark:text-[#8D9EC6]">
                                Step into SoulShare once more, where sharing surplus ignites
                                caring uproars. Log in now, as your kindness soars, creating
                                ripples of change that the heart adores!
                            </p>
                        </div>
                        <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                            <div className="text-2xl font-bold tex-gray-900 dark:text-white sm:w-[100%]">
                                <h2>Contact  SoulShare</h2>
                            </div>
                            <form
                                onSubmit={handleSubmit}
                                method="POST"
                                className="mt-8 space-y-6 "
                            >
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-medium dark:text-white"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="UserName"
                                        id="name"
                                        value={formData.UserName}
                                        onChange={handleInputChange}
                                        placeholder="soulshare"
                                        autoComplete="off"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-medium dark:text-white"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="example@gmail.com"
                                        autoComplete="off"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block mb-2 text-sm font-medium text-medium dark:text-white"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Your message here"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="4"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 resize-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    ></textarea>
                                </div>
                                <motion.button
                                    className="w-full"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <div className="flex flex-row justify-center items-center border border-gray-400 rounded-lg p-2.5 hover:bg-gray-100 hover:text-gray-700 transition ease-in-out duration-500">
                                        Submit
                                    </div>
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </section >
            </div >
        </>
    )
}

export default Contact
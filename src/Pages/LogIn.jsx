import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "../Components/Navbar";
import ShareSocials from "../Components/ShareSocials";
import { motion } from "framer-motion";
const Login = () => {
  const [showPassword, setShowPassword] = useState("");
  const togglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex flex-row">
        <Navbar />
        <section>
          <div className="bg-gray-50 dark:bg-gray-900 bg-gray-800">
            <div className="py-8 px-4 mx-auto max-w-[100%] lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
              <div className="flex flex-col justify-center">
                <h3 className="text-4xl font-bold text-gray-600 mb-4 text-4xl tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-[white]">
                  Reconnect with SoulShare:
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

                <NavLink
                  to="#"
                  className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                >
                  Read more about our App
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </NavLink>
              </div>
              <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                <div className="text-2xl font-bold tex-gray-900 dark:text-white sm:w-[100%]">
                  <h2>Sign In to SoulShare</h2>
                </div>
                <form
                  action="#"
                  onSubmit={handleFormSubmit}
                  className="mt-8 space-y-6 "
                >
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
                      value={data.email}
                      onChange={(e) => {
                        setData({ ...data, email: e.target.value });
                      }}
                      placeholder="example@gmail.com"
                      autoComplete="off"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-medium dark:text-white"
                    >
                      Password
                    </label>
                    <div className="flex">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        value={data.password}
                        onChange={(e) => {
                          setData({ ...data, password: e.target.value });
                        }}
                        placeholder="••••••••"
                        autoComplete="off"
                        className="bg-gray-50 border border-gray-300 border-r-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-r-none"
                        required
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="44px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#FFFFFF"
                        onClick={togglePassword}
                        className="h-full bg-gray-50 border border-gray-300 border-l-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-l-none"
                      >
                        {showPassword ? (
                          <>
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z" />{" "}
                          </>
                        ) : (
                          <>
                            <path
                              d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"
                              fill="none"
                            />
                            <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z" />{" "}
                          </>
                        )}
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        name="remember"
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="font-medium text-gray-500 dark:text-gray-400"
                      >
                        Remember this device
                      </label>
                    </div>
                    <a
                      href="#"
                      className="ml-auto text-sm font-medium text-[#51D6FF] hover:underline dark:hover:text-[#37FF8B] dark:text-[#51D6FF]"
                    >
                      Lost Password?
                    </a>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    type="submit"
                    className=" w-full px-5 py-3 text-base font-semibold text-center text-white bg-[#51D6FF] rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-[100%] lg:w-[100%] dark:bg-[#51D6FF] dark:hover:bg-[#37FF8B] dark:focus:ring-blue-800 transition duration-500 ease-in-out"
                  >
                    Login into your Account
                  </motion.button>
                  <div className="flex flex-row items-center">
                    <hr className="w-[48%] sm:w-[48%] md:w-[48%] lg:w-[48%]" />
                    <div className="m-1">
                      <h3 className="text-sm font-medium text-medium dark:text-white">
                        OR
                      </h3>
                    </div>
                    <hr className="w-[48%] sm:w-[48%] md:w-[48%] lg:w-[48%]" />
                  </div>
                  <div className="flex flex-row justify-center items-center border border-gray-400 rounded-lg p-2.5 hover:bg-gray-100 hover:text-gray-700 transition ease-in-out duration-500">
                    <svg
                      width="1em"
                      height="1em"
                      className="m-2.5 cursor-pointer sm:w-2em sm:h-wem"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23.52 12.275c0-.851-.076-1.67-.218-2.455H12v4.642h6.458a5.52 5.52 0 01-2.394 3.622v3.01h3.878c2.269-2.088 3.578-5.165 3.578-8.82z"
                        fill="#4285F4"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.997 24.001c3.24 0 5.956-1.074 7.942-2.907l-3.878-3.01c-1.075.72-2.45 1.145-4.064 1.145-3.125 0-5.77-2.111-6.714-4.948h-4.01v3.11A11.995 11.995 0 0011.997 24z"
                        fill="#34A853"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.285 14.278a7.213 7.213 0 01-.376-2.28c0-.79.136-1.56.376-2.28V6.61H1.276A11.995 11.995 0 000 12c0 1.936.464 3.769 1.276 5.389l4.01-3.11z"
                        fill="#FBBC05"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.997 4.773c1.762 0 3.344.605 4.587 1.794l3.442-3.442C17.948 1.19 15.232 0 11.997 0 7.307 0 3.248 2.69 1.273 6.61l4.01 3.11c.943-2.836 3.589-4.947 6.714-4.947z"
                        fill="#EA4335"
                      ></path>
                    </svg>
                    <h3 className="font-semibold text-lg cursor-pointer">
                      Continue with Google
                    </h3>
                  </div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white m-1">
                    Not registered yet?
                    <NavLink
                      to="/signup"
                      className="text-blue-600 hover:underline dark:hover:text-[#37FF8B] dark:text-[#51D6FF]"
                    >
                      Create Account
                    </NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <ShareSocials />
      </div>
    </>
  );
};

export default Login;

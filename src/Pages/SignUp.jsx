import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "../Components/Navbar";
import ShareSocials from "../Components/ShareSocials";
import { motion } from "framer-motion";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState("");
  const togglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex flex-row ">
        <Navbar />
        <section>
          <div className="bg-gray-50 dark:bg-gray-900 bg-gray-800">
            <div className="py-4 px-4 mx-auto max-w-[100%]  lg:py-4 grid lg:grid-cols-2 gap-8 lg:gap-6">
              <div className="flex flex-col justify-center">
                <h3 className="text-4xl font-bold text-gray-600 mb-4 text-4xl  tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-[white]">
                  Join SoulShare: <br />
                  <span className="text-4xl font-bold text-gray-600 mb-4 text-4xl  tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-[#51D6FF]">
                    {" "}
                    <Typewriter
                      words={["Sharing Surplus!", "Spreading Hope!"]}
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
                  Make a meaningful impact by sharing surplus food with those
                  who need it most. Join SoulShare and be a part of a
                  compassionate community that`s dedicated to reducing waste and
                  nourishing lives.
                </p>
                <NavLink
                  to="/"
                  className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                  onClick={() => {
                    const anchor = document.querySelector("#about-link");
                    anchor.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
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
              <div className="w-full lg:max-w-xl p-6 space-y-6 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800 ">
                <div className="text-2xl font-bold tex-gray-900 dark:text-white sm:w-[100%]">
                  <h2>Sign up to SoulShare</h2>
                </div>
                <form
                  action="#"
                  onSubmit={handleFormSubmit}
                  className="mt-8 space-y-5 "
                >
                  <div className="flex flex-row justify-between flex flex-col space-y-4 sm:flex-row sm:justify-center  sm:space-y-0 sm:space-x-4">
                    <div className=" sm:w-[100%] md:w-[50%] lg:w-[50%]">
                      <label
                        htmlFor="firstName"
                        className="block mb-2 text-sm font-medium text-medium dark:text-white"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={data.firstName}
                        onChange={(e) => {
                          setData({ ...data, firstName: e.target.value });
                        }}
                        placeholder="example"
                        autoComplete="off"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-[100%]  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>
                    <div className=" sm:w-[100%] md:w-[50%] lg:w-[50%]">
                      <label
                        htmlFor="lastName"
                        className="block mb-2 text-sm font-medium text-medium dark:text-white"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={data.lastName}
                        onChange={(e) => {
                          setData({ ...data, lastName: e.target.value });
                        }}
                        placeholder="example"
                        autoComplete="off"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>
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
                      htmlFor="Contact"
                      className="block mb-2 text-sm font-medium text-medium dark:text-white"
                    >
                      Contact Number
                    </label>
                    <input
                      type="text"
                      name="Contact"
                      id="Contact"
                      value={data.contactNumber}
                      onChange={(e) => {
                        setData({ ...data, contactNumber: e.target.value });
                      }}
                      placeholder="***** *****"
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
                        placeholder="••••••••"
                        autoComplete="off"
                        onChange={(e) => {
                          setData({ ...data, password: e.target.value });
                        }}
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
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block mb-2 text-sm font-medium text-medium dark:text-white"
                    >
                      Confirm Password
                    </label>
                    <div className="flex">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword"
                        id="confirmPassword"
                        value={data.confirmPassword}
                        onChange={(e) => {
                          setData({ ...data, confirmPassword: e.target.value });
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

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-5 py-3 text-base font-semibold text-center text-white bg-[#51D6FF] rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-[#51D6FF] dark:hover:bg-[#37FF8B] dark:focus:ring-blue-800 transition duration-500 ease-in-out"
                  >
                    Create Account
                  </motion.button>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Have an account?
                    <NavLink
                      to="/login"
                      className="text-blue-600 hover:underline dark:hover:text-[#37FF8B] dark:text-[#51D6FF]"
                    >
                      Login to your account
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

export default SignUp;

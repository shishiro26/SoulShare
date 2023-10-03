import TestImage from "../assets/pexels-rajesh-tp-1624487.jpg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const CardClothes = (props) => {
  const [heartColor, setHeartColor] = useState("none");
  const [userData, setUserData] = useState([]);
  const [time, setTime] = useState({
    hours: "",
    minutes: "",
    seconds: "",
  });

  useEffect(() => {
    setUserData(props);
    timer();
  }, []);
  const ChangeHeartColor = () => {
    if (heartColor === "none") {
      setHeartColor("#51D6FF");
    } else {
      setHeartColor("none");
    }
  };
  const timer = () => {
    const presentTime = new Date();
    sessionStorage.setItem("currentTime", presentTime);
    const currentTime = new Date(sessionStorage.getItem("currentTime"));
    const targetTime = new Date(currentTime.getTime() + 12 * 60 * 60 * 1000);

    const updateTimer = () => {
      const currentTime = new Date();
      const timeDifference = targetTime - currentTime;

      const hours = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTime({
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });

      if (timeDifference <= 0) {
        clearInterval(timerInterval);
      }
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
  };
  return (
    <div
      id="Card"
      className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:md-w-sm"
    >
      <div className="w-[100%] h-[300px] overflow-hidden object-cover">
        <img
          src={TestImage}
          alt="/////"
          width="500"
          height="600"
          className="hover:scale-105 hover:rounded-lg ease-in-out duration-[350] transition-all rounded-lg"
        />
        {userData?.role === "food" ? (
          <div id="Heart" className="absolute top-0 right-0 mr-0 mt-7">
            <button
              aria-label="Add to wishlist: Jibhi, India"
              data-testid="listing-card-save-button"
              type="button"
              className="mx-4 "
              onClick={ChangeHeartColor}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={heartColor}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 border-transparent"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div id="Heart" className="absolute top-0 right-0 mr-0 mt-4 ">
            <button
              aria-label="Add to wishlist: Jibhi, India"
              data-testid="listing-card-save-button"
              type="button"
              className="mx-4 "
              onClick={ChangeHeartColor}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={heartColor}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 border-transparent"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
      <div id="Details">
        <div className="flex justify-between mx-2 my-1">
          <div>
            <NavLink to="/card" className="inline-flex items-center">
              {
                userData.role === 'food' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-white" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M280-80v-366q-51-14-85.5-56T160-600v-280h80v280h40v-280h80v280h40v-280h80v280q0 56-34.5 98T360-446v366h-80Zm400 0v-320H560v-280q0-83 58.5-141.5T760-880v800h-80Z" fill="#fff" />
                  </svg>
                ) : userData.role === 'medicine' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M160-80q-33 0-56.5-23.5T80-160v-480q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v480q0 33-23.5 56.5T800-80H160Zm0-80h640v-480H160v480Zm240-560h160v-80H400v80ZM160-160v-480 480Zm280-200v120h80v-120h120v-80H520v-120h-80v120H320v80h120Z" fill="#fff" />
                  </svg>
                ) : userData.role === 'clothes' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M120-160q-17 0-28.5-11.5T80-200q0-10 4-18.5T96-232l344-258v-70q0-17 12-28.5t29-11.5q25 0 42-18t17-43q0-25-17.5-42T480-720q-25 0-42.5 17.5T420-660h-80q0-58 41-99t99-41q58 0 99 40.5t41 98.5q0 47-27.5 84T520-526v36l344 258q8 5 12 13.5t4 18.5q0 17-11.5 28.5T840-160H120Zm120-80h480L480-420 240-240Z" fill="#fff" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M280-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640v80H160v480h120v80Zm160-100q25 0 42.5-17.5T500-320q0-25-17.5-42.5T440-380q-25 0-42.5 17.5T380-320q0 25 17.5 42.5T440-260Zm-80 100v-71q-19-17-29.5-40T320-320q0-26 10.5-49t29.5-40v-71h160v71q19 17 29.5 40t10.5 49q0 26-10.5 49T520-231v71H360Zm480 0H640q-17 0-28.5-11.5T600-200v-360q0-17 11.5-28.5T640-600h200q17 0 28.5 11.5T880-560v360q0 17-11.5 28.5T840-160Zm-160-80h120v-280H680v280Zm0 0h120-120Z" fill="#fff" />
                  </svg>
                )
              }


              {userData.productName}
            </NavLink>
          </div>
          {userData.role === "food" ? (
            <>
              <div className="text-center rounded-lg">{`${time.hours}:${time.minutes}:${time.seconds}`}</div>
            </>
          ) : (
            <></>
          )}

          <div id="Profile" className="flex items-center">

            <Link to='/browse'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>{" "}
              {userData.userName}
            </Link>
          </div>
          {/* <div id="Distance">
            <span
              id="Posted how many days ago"
              className="mx-2  bg-gray-800 text-gray-800 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>
              <span className="text-sm pl-1">{userData.distance}</span>
            </span>
          </div> */}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          className=" w-full px-5 py-3 text-base font-semibold text-center text-white bg-[#51D6FF] rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-[100%] lg:w-[100%] dark:bg-[#51D6FF] dark:hover:bg-[#37FF8B] dark:focus:ring-blue-800 transition duration-500 ease-in-out"
        >
          Interested
        </motion.button>


      </div>
    </div>
  );
};

export default CardClothes;

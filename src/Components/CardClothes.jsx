import TestImage from "../assets/pexels-rajesh-tp-1624487.jpg";
import { useEffect, useState } from "react";
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
      {userData.role === "food" ? (
        <>
          <div className="text-center border-2 border-zinc-500 rounded-lg">{`${time.hours}:${time.minutes}:${time.seconds}`}</div>
        </>
      ) : (
        <></>
      )}

      <div className="w-[100%] h-[300px] overflow-hidden object-cover">
        <img
          src={TestImage}
          alt="/////"
          width="500"
          height="600"
          className="hover:rounded-lg hover:scale-105 ease-in-out duration-[350] transition-all rounded-lg"
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
        <div className="flex justify-between mx-4 my-1   ">
          <div id="Profile">
            <a href="LinkToProfile">
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
            </a>
          </div>

          <div id="Distance">
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
          </div>
        </div>

        <div
          id="join chats buttons"
          className="flex justify-between mx-3 my-1 "
        >
          <button>
            <a className=" mx-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#51D6FF] dark:text-[black] dark:hover:bg-[#06C0F8] dark:hover:scale-105 dark:focus:ring-blue-800 ease-in-out duration-300 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline-block mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
              <span className="sm:hidden md:inline">Join Chat</span>
            </a>
          </button>
          <button>
            <a className="mx-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#51D6FF] dark:text-[black] dark:hover:bg-[#06C0F8] dark:hover:scale-105 dark:focus:ring-blue-800 ease-in-out duration-300 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline-block mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
              <span className="inline sm:hidden md:inline">Join Community</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardClothes;

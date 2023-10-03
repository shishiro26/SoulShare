import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;

function Location() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [responseData, setResponseData] = useState({});
  const [dialogVisible, setDialogVisible] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
    
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      setTimeout(() => {
        axios
          .get(
            `${API_endpoint}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${import.meta.env.VITE_API_KEY
            }`
          )
          .then((res) => {
            setResponseData({ ...res.data });
          })
          .catch((err) => console.log(err.message));
      }, 100);
    }
  }, [latitude, longitude]);

  const country = responseData.sys?.country || "";
  const areaName = responseData.name || "";

  const toggleDialog = () => {
    setDialogVisible(!dialogVisible);
  };
  return (
    <div>
      {dialogVisible ? (
        <>
          {latitude && longitude ? (
            <section className="w-[100%]">
              <div className="py-3  mx-auto  max-w-screen-xl text-center z-10 relative">
                <NavLink
                  to="#"
                  className="flex justify-between items-center  py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-blue-100 rounded-full dark:bg-[#51D6FF]"
                >
                  <span className="block text-xs dark:bg-[#37FF8B] rounded-full text-gray-900 px-4 py-1.5 mr-3">
                    New Location
                  </span>{" "}
                  <div className="flex ">
                    <span className="block text-sm font-medium">
                      {areaName}, {country}
                    </span>
                    <button
                      type="button"
                      className="ml-auto -mx-1.5 -my-1.5  rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-[#37FF8B] inline-flex items-center justify-center h-8 w-8 "
                      data-dismiss-target="#alert-1"
                      onClick={toggleDialog}
                      aria-label="Close"
                    >
                      <span className="sr-only">Close</span>
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                    </button>
                  </div>
                </NavLink>
              </div>
            </section>
          ) : null}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Location;
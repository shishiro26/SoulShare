import { NavLink } from "react-router-dom";
function Location() {
  return (
    <div>
      <div>
        <section className="bg-white dark:bg-gray-900 ">
          <div className="py-4 px-4 mx-auto w-full max-w-screen-xl text-center  z-10 relative">
            <NavLink
              to="#"
              className="flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"
            >
              <span className="block text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">
                New Location
              </span>{" "}
              <span className="block text-sm font-medium">
                Ahmamau Lucknow, Uttar Pradesh
              </span>
            </NavLink>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Location;

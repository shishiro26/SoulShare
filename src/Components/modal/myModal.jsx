import { motion } from "framer-motion";
import dropIn from "./dropIn";

const Modal = ({ handleClose }) => {
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
            Wanna add a product!!
          </h1>
          <form action="#" className="m-6 space-y-6" autoComplete="off">
            <div>
              <label
                htmlFor="pname"
                className="block mb-2 text-sm font-medium text-medium dark:text-white"
              >
                Product Name
              </label>
              <input
                type="text"
                name="pname"
                id="pname"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-[100%]  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="ex:Biryani"
              />
            </div>
            <div>
              <label
                htmlFor="ptype"
                className="block mb-2 text-sm font-medium text-medium dark:text-white"
              >
                Product Type{" "}
              </label>
              <select
                name="ptype"
                id="ptype"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-[100%]  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="" selected>
                  Select an the type of product
                </option>
                <option value="Food" className="text-blue">
                  🍴Food
                </option>
                <option value="clothes">👔Clothes</option>
                <option value="Cosmetics">💄Cosmetics</option>
                <option value="Other">...Other</option>
              </select>
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-medium dark:text-white"
                htmlFor="file_input"
              >
                Upload file
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-[100%]  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="file_input"
                type="file"
              />
            </div>
          </form>
          <div className="flex  justify-between">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClose}
              className=" px-5 py-3 text-base font-semibold text-center text-white bg-[#51D6FF] rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  dark:bg-[#51D6FF] dark:hover:bg-[#37FF8B] dark:focus:ring-blue-800 transition duration-500 ease-in-out "
            >
              Add Item
            </motion.button>
            <button
              onClick={handleClose}
              className="px-5 py-3 text-base font-semibold text-center text-white bg-[#51D6FF] rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  dark:bg-[#51D6FF] dark:hover:bg-[#37FF8B] dark:focus:ring-blue-800 transition duration-500 ease-in-out"
            >
              Close
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Modal;

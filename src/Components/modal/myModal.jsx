import React, { useState } from "react";
import { motion } from "framer-motion";
import dropIn from "./dropIn";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import '../../index.css'
import Cookies from "js-cookie";

const Modal = ({ handleClose }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    productName: "",
    productType: "",
    description: "",
    latitude: "",
    longitude: ""
  });
  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setFormData((prevFormData) => ({
        ...prevFormData, latitude: position.coords.latitude, longitude: position.coords.longitude
      }))
    })
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formDataToSend = new FormData();
    formDataToSend.append("productName", formData.productName);
    formDataToSend.append("productType", formData.productType);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("productImage", image);
    formDataToSend.append("latitude", formData.latitude);
    formDataToSend.append("longitude", formData.longitude);
    console.log(formData)

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/auth/product/${Cookies.get("userId")}`, {
        method: "POST",
        credentials: "include",
        body: formDataToSend,
      });

      if (response.ok) {
        console.log("Product added successfully!");
        toast.success("Product added successfully!", {
          position: toast.POSITION.TOP_RIGHT,
          className: 'toast-message'
        });
        const data = await response.json();
        console.log(data);
        setLoading(false);
        window.location.reload();
      } else {
        const errorMessage = await response.text();
        if (response.status === 400) {
          toast.error(errorMessage, {
            position: toast.POSITION.TOP_RIGHT,
            className: 'toast-message'
          });
        } else if (response.status === 401) {
          toast.error("User is not verified.", {
            position: toast.POSITION.TOP_RIGHT,
            className: 'toast-message'
          });
        } else {
          toast.error("Error adding the product!", {
            position: toast.POSITION.TOP_RIGHT,
            className: 'toast-message'
          });
        }
        setLoading(false);
      }
    } catch (error) {
      console.error("Error adding the product", error.message);
      toast.error("Error adding the product!", {
        position: toast.POSITION.TOP_RIGHT,
        className: 'toast-message'
      });
      setLoading(false);
    }
  };

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
          <h1 className="m-4 text-4xl font-bold text-gray-600 mb-4  tracking-tight leading-none md:text-5xl lg:text-4xl dark:text-[white]">
            Wanna add a product!!
          </h1>
          <form action="#" className="m-6 space-y-6" onSubmit={handleSubmit} autoComplete="off">
            <div>
              <label
                htmlFor="productName"
                className="block mb-2 text-sm font-medium text-medium dark:text-white"
              >
                Product Name
              </label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleInputChange}
                id="productName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-[100%]  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="ex:Biryani"
              />
            </div>
            <div>
              <label
                htmlFor="productName"
                className="block mb-2 text-sm font-medium text-medium dark:text-white"
              >
                Product Description
              </label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                id="description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-[100%]  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="ex:Biryani is so delicious"
              />
            </div>
            <div>
              <label
                htmlFor="productType"
                className="block mb-2 text-sm font-medium text-medium dark:text-white"
              >
                Product Type{" "}
              </label>
              <select
                name="productType"
                id="productType"
                value={formData.productType}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-[100%]  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">
                  Select the type of product
                </option>
                <option value="Food">Food</option>
                <option value="Clothes">Clothes</option>
                <option value="Pickle">Pickle</option>
                <option value="Medicine">Medicine</option>
                <option value="Other">Other</option>
              </select>

            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-medium dark:text-white"
                htmlFor="productImage"
              >
                Upload file
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-[100%] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="productImage"
                type="file"
                onChange={handleImageChange}
              />
            </div>
            <div className="flex  justify-between">
              <button
                type="submit"

                className=" px-5 py-3 text-base font-semibold text-center text-white bg-[#51D6FF] rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  dark:bg-[#51D6FF] dark:hover:bg-[#37FF8B] dark:focus:ring-blue-800 transition duration-500 ease-in-out "
              >
                Add Item
              </button>
              <button
                onClick={handleClose}
                className="px-5 py-3 text-base font-semibold text-center text-white bg-[#51D6FF] rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  dark:bg-[#51D6FF] dark:hover:bg-[#37FF8B] dark:focus:ring-blue-800 transition duration-500 ease-in-out"
              >
                Close
              </button>
            </div>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default Modal;

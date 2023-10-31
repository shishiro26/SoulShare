import CardClothes from "../Components/CardClothes";
import ImageSlider from "../Components/ImageSlider";
import Navbar from "../Components/Navbar";
import Button from "../Components/modal/button";
import Location from "../Components/location";
import Categories from "../Components/categories";
import { toast } from "react-toastify";
import UserContext from "../context/UserContext";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../Components/Loader";
const Browse = () => {
  const { loggedIn } = useContext(UserContext)
  const [cardData, setCardData] = useState({})
  const [Loading, setLoading] = useState(true);
  const location = useLocation();

  const productType = new URLSearchParams(location.search).get('productType');

  const fetchUrl = productType
    ? `${import.meta.env.VITE_BASE_URL}/api/product/category/?productType=${productType}`
    : `${import.meta.env.VITE_BASE_URL}/api/product/getAll/`;
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(fetchUrl, {
          method: "GET",
          credentials: "include"
        });
        const data = await response.json();
        setCardData(data);
        console.log(data);
        console.log("Products fetched successfully");
        setLoading(false);
        setDataFetched(true);
      } catch (error) {
        console.error("Error", error.message);
        toast.error(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (dataFetched) {
      // window.location.reload(); 
    }
  }, [dataFetched]);

  return (
    <>
      {
        Loading ?
          <Loader /> :
          <div className="flex flex-row gap-3">
            <Navbar />
            <Location />
            <div>
              <div style={{
                width: "100%",
                height: "500px",
                margin: "0px",
                objectFit: "cover"
              }} className="py-2 px-2">
                <ImageSlider />
              </div>
              <div className="m-4 flex flex-col ">
                <div className="flex items-center justify-between sm:flex-row">
                  {
                    loggedIn && (<Button />)
                  }

                  <Categories />
                </div>

                <hr className="m-1 w-full" />
              </div>
              <div>
                <ul className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {cardData.map((data, index) => (
                    <li key={index} className="m-5">
                      <CardClothes
                        productId={data._id}
                        productName={data.productName}
                        userName={data.userName}
                        distance={60}
                        role={data.productType}
                        image={data.productImage}
                        createdAt={data.createdAt}
                      />
                    </li>))
                  }
                </ul>
              </div>
            </div>
          </div>
      }

    </>

  );
};

export default Browse;

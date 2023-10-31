// import Autoplay from "embla-carousel-autoplay";
// import useEmblaCarousel from "embla-carousel-react";


// const sliderData = [
//   {
//     id: 1,
//     title: "Serene Nature Scene with Sunlight Streaming Through Trees",
//     url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
//   },
//   {
//     id: 2,
//     title: "Tranquil Beach with Gentle Waves and Clear Blue Sky",
//     url: "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg",
//   },
//   {
//     id: 3,
//     title: "Lush Forest Scene with Rays of Sunlight Peeking Through",
//     url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
//   },
//   {
//     id: 4,
//     title: "Elegant Woman in City Setting with a Chic Attitude",
//     url: "https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_1280.jpg",
//   },
//   {
//     id: 5,
//     title: "Majestic Tree in Vibrant Autumn Colors",
//     url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
//   },
// ];

// export default function ImageSlider() {
//   const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

//   return (
//     <div
//       className="overflow-hidden bg-gray-200 w-full mx-auto flex items-center justify-center h-screen"
//       ref={emblaRef}>
//       <div className="flex">
//         {sliderData?.map((item) => {
//           return (
//             <div className="embla__slide relative h-full w-full" key={item.id}>

//               {/* the image */}
//               <img className="w-full h-full" src={item.url} alt="" />

//               {/* title/subtitle */}
//               <h1 className="absolute top-1/2 left-1/2 w-full md:w-auto transform -translate-x-1/2 translate-y-[3rem] md:translate-y-[9rem]  lg:translate-y-48 bg-cyan-600 py-2 lg:py-4 px-2 lg:px-8 text-xl lg:text-2xl text-white font-extrabold">
//                 {item.title}
//               </h1>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import '../index.css';
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader";

export default function ImageSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const [isLoading, setIsLoading] = useState(true);
  const [slideData, setSlideData] = useState([]);

  const carouselImages = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/product/carousel`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const images = await response.json();
      setSlideData(images);
    } catch (error) {
      console.error("Error fetching carousel images:", error);
      toast("Error while fetching the carousel");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    carouselImages();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          className="overflow-hidden bg-gray-200 w-full mx-auto flex items-center justify-center h-full"
          ref={emblaRef}>
          <div className="flex">
            {slideData?.map((item) => {
              return (
                <div className="embla__slide relative h-full w-full" key={item._id}>
                  <img className="w-screen h-screen" src={`data:image/png;base64,${item.productImage}`} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

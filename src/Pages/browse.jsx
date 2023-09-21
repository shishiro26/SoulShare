import CardClothes from "../Components/CardClothes";
import ImageSlider from "../Components/Carousals/ImageSlider";
import Navbar from "../Components/Navbar";
import Button from "../Components/modal/button";

const Browse = () => {
  const slides = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimMDuMEMZWRWmAqL1It9mF1Nw1o_iMY2UVQ&usqp=CAU",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBNnH7hPrYmvHPtcImonVIDwGgMIgtg5URew&usqp=CAU",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSudU6gmyeog5RWlz8b2FUxARwyrD-GMo9txw&usqp=CAU",
    },
    {
      url: "https://e0.pxfuel.com/wallpapers/378/1016/desktop-wallpaper-obito-uchiha-anime-naruto-shippuden-naruto.jpg",
    },
    {
      url: "https://e0.pxfuel.com/wallpapers/34/167/desktop-wallpaper-cute-naruto-anime-naruto-little-naruto-uzumaki.jpg",
    },
  ];

  const containerStyles = {
    width: "100%",
    height: "500px",
    margin: "0",
  };

  const cardClothesData = [
    { userName: `User123`, distance: 120, roles: "food" },
    { userName: "Fashionista", distance: 20, roles: "food" },
    { userName: "Trendsetter", distance: 50, roles: "medicines" },
    { userName: "Trendsetter", distance: 50, roles: "other" },
    { userName: "tharun", distance: 50, roles: "food" },
    { userName: "Trendsetter", distance: 50, roles: "other" },
    { userName: "Trendsetter", distance: 50, roles: "other" },
    { userName: "Trendsetter", distance: 50, roles: "other" },
  ];

  return (
    <div className="flex flex-row gap-3">
      <Navbar />
      <div>
        <div style={containerStyles} className="py-2 px-2">
          <ImageSlider slides={slides} />
        </div>
        <div className="m-4 flex flex-col ">
          <Button />
          <hr className="m-1 w-full" />
        </div>
        <div>
          <ul className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {cardClothesData.map((data, index) => (
              <li key={index} className="m-5">
                <CardClothes
                  userName={data.userName}
                  distance={data.distance}
                  role={data.roles}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Browse;

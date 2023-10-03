import CardClothes from "../Components/CardClothes";
import ImageSlider from "../Components/ImageSlider";
import Navbar from "../Components/Navbar";
import Button from "../Components/modal/button";
import Location from "../Components/location";
import Categories from "../Components/categories";
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
    { productName: 'Biryani', userName: `Bala`, distance: 120, roles: "food" },
    { productName: 'POLO', userName: "Saketh", distance: 20, roles: "clothes" },
    { productName: 'Citrazen', userName: "DOLO", distance: 50, roles: "medicine" },
    { productName: 'Phone', userName: "Akhil", distance: 50, roles: "other" },
    { productName: 'Mutton', userName: "tharun", distance: 50, roles: "food" },
    { productName: 'Denim', userName: "Bala", distance: 50, roles: "clothes" },
    { productName: 'Dolo', userName: "Sheshu", distance: 50, roles: "medicine" },
    { productName: 'Biryani', userName: "Trendsetter", distance: 50, roles: "food" },
  ];

  return (
    <div className="flex flex-row gap-3">
      <Navbar />
      <Location />
      <div>
        <div style={containerStyles} className="py-2 px-2">
          <ImageSlider slides={slides} />
        </div>
        <div className="m-4 flex flex-col ">
          <div className="flex items-center justify-between sm:flex-row">
            <Button />
            <Categories />
          </div>

          <hr className="m-1 w-full" />
        </div>
        <div>
          <ul className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {cardClothesData.map((data, index) => (
              <li key={index} className="m-5">
                <CardClothes
                  productName={data.productName}
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

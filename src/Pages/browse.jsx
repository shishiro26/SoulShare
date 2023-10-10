import CardClothes from "../Components/CardClothes";
import ImageSlider from "../Components/ImageSlider";
import Navbar from "../Components/Navbar";
import Button from "../Components/modal/button";
import Location from "../Components/location";
import Categories from "../Components/categories";
const Browse = () => {
  const slides = [
    {
      url: "https://api.dicebear.com/5.x/initials/svg?seed=shishiro",
    },
    {
      url: "https://api.dicebear.com/5.x/initials/svg?seed=raghamai",
    },
    {
      url: "https://api.dicebear.com/5.x/initials/svg?seed=balu",
    },
    {
      url: "https://api.dicebear.com/5.x/initials/svg?seed=sunitha",
    },
    {
      url: "https://api.dicebear.com/5.x/initials/svg?seed=digvijay",
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

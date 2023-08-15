// import { NavLink } from "react-router-dom";
import Location from "../Components/location";
import Navbar from "../Components/Navbar";
// import CarousalImage from "../Components/Carousals/CarousalImage";
function Browse() {
  return (
    <div className="flex flex-row">
      <Navbar />
      <div className="flex">
        <Location />
        {/* <CarousalImage /> */}
      </div>
      {/* <CarousalImage /> */}
    </div>
  );
}

export default Browse;

import CardClothes from "./Components/CardClothes";
import FoodCard from "./Components/FoodCard";
import Clock from "./Components/Timer/Clock";
import Timer from "./Components/Timer/Timer";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/LandingPage";

function App() {
  return (

    // <Routes>
    //   <Route path="/signup" element={<SignUp />} />
    //   <Route path="/login" element={<Login />} />
    //   <Route path="/contact" element={<ContactUs />} />

    // </Routes>
  
    <div>
    

    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
    </div>

  );
}

export default App;

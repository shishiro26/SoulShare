import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/LandingPage";
import Browse from "./Pages/browse";
import ChatBox from "./Components/chatBox";
import { useEffect } from "react";
// import AboutUs from "./Components/AboutUs";

function App() {
  useEffect(() => {
    if (window.innerWidth < 770) {
      alert(
        `For better viewing experience use the devices width greater than 750px`
      );
    }
  }, [window.innerWidth]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/browse" element={<Browse />} />
        {/* <Route path="/about" element={<AboutUs />} /> */}
        <Route path="/yourChats" element={<ChatBox />} />
      </Routes>
    </div>
  );
}

export default App;

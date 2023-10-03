import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/LandingPage";
import Browse from "./Pages/browse";
import ChatBox from "./Components/chatBox";
import Profile from "./Pages/Profile";
// import AboutUs from "./Components/AboutUs";
import PageNotFound from "./Pages/PageNotFound";
import CardPage from "./Pages/CardPage";

function App() {

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
        <Route path="/profile" element={<Profile />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </div>
  );
}

export default App;

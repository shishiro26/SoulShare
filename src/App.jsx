
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/LandingPage";

function App() {
  return (

 
  
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

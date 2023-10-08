import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loader from "./Components/Loader";

const Landing = lazy(() => import("./Pages/LandingPage"));
const SignUp = lazy(() => import("./Pages/SignUp"));
const Login = lazy(() => import("./Pages/LogIn"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const OtpBox = lazy(() => import("./Pages/otp"));
const Browse = lazy(() => import("./Pages/browse"));
const CardPage = lazy(() => import("./Pages/CardPage"));
const PageNotFound = lazy(() => import("./Pages/PageNotFound"));
const Profile = lazy(() => import("./Pages/Profile"));
const ChatBox = lazy(() => import("./Components/chatBox"));
const PrivateRoutes = lazy(() => import("./PrivateRoute"));


function App() {
  const toastConfig = {
    autoClose: false,
  };

  return (
    <>
      <ToastContainer {...toastConfig} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/verifyemail/:userId" element={<OtpBox />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/card" element={<CardPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/yourChats" element={<ChatBox />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

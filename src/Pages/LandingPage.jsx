import Hero from "../Components/Hero.jsx";
import Feature from "../Components/Feature.jsx";
import AboutUs from "../Components/AboutUs.jsx";
import Testimonials from "../Components/Testimonials.jsx";
import Navbar from "../Components/Navbar";

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-row">
        <Navbar />
        <div>
          <Hero />
          <Feature />
          <AboutUs />
          <Testimonials />
        </div>
        {/* <Button/> */}
      </div>
    </>
  );
};

export default LandingPage;

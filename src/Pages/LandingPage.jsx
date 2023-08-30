import Hero from "../Components/Hero.jsx";
import Feature from "../Components/Feature.jsx";
import AboutUs from "../Components/AboutUs.jsx";
import Testimonials from "../Components/Testimonials.jsx";
import Navbar from "../Components/Navbar";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
// import NewItem from "../Components/modal/dropIn.jsx";
// import CardInput from "../Components/CardInput.jsx";
// import CardClothes from "../Components/CardClothes.jsx";
// import { useState } from "react";
// import Button from "../Components/modal/button.jsx";

const LandingPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <>
      <div className="flex flex-row">
        <Navbar />
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
        >
          <Hero />
          <Feature />
          <AboutUs />
          <Testimonials />
        </motion.div>
        {/* <Button/> */}
      </div>
    </>
  );
};

export default LandingPage;

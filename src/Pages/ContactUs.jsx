// import { useState } from "react";
// import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";


const ContactUs = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 bg-gray-800">   
      <section>
        <h1 className="text-center font-Raleway pt-[5%] mb-[2%] text-[50px]  text-gray-600 mb-4 text-[50px] tracking-tight leading-none text-gray-900 md:text-[50px] lg:text-[50px] dark:text-[white]">
          Get in Touch
        </h1>
        <p className="text-center pb-[9%] text-3xl  text-gray-600 mb-4 text-4xl tracking-tight leading-none text-gray-900 md:text-5xl lg:text-3xl dark:text-[white]">
          We love our customers. Feel free to contact us at any time. <br />
          We are available via
          <span className="text-3xl font-bold text-gray-600 mb-4 text-4xl  tracking-tight leading-none text-gray-900 md:text-5xl lg:text-3xl dark:text-[#51D6FF]">
            <Typewriter
              words={[" Email", " LiveChat", " Phone"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </p>
      </section>
      <section></section>
    </div>
  );
};

export default ContactUs;

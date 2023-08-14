// import { useState } from "react";
// import { Dialog } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import Navbar from "../Components/Navbar.jsx";
import ShareSocials from "../Components/ShareSocials.jsx";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

// const navigation = [
//   { name: "Product", href: "#" },
//   { name: "Features", href: "#" },
//   { name: "Marketplace", href: "#" },
//   { name: "Company", href: "#" },
// ];

export default function Landing() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-row" id="home-link">
      <div className="relative isolate px-6 pt-14 lg:px-8 w-[100%]">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto mt-[-50px] max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl text-[#51D6FF] font-bold tracking-tight text-[#51D6FF] sm:text-6xl">
              Elevate Humanity:
              <br />
              <span className="text-3xl font-bold tracking-tight text-gray-100 sm:text-6xl">
                Transform Lives through Clothing and Food Donations!
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join us in making a meaningful difference in the lives of those in
              need. Our platform connects compassionate individuals and
              businesses with the power to give. Donate gently used clothing and
              nourishing food items to underserved communities, spreading
              <span className="mt-6 text-lg leading-8 text-gray-600 tracking-tight leading-none text-[#51D6FF] md:text-lg lg:text-lg dark:text-[#51D6FF]">
                <Typewriter
                  words={[" Warmth", " Comfort", " Hope"]}
                  loop={10000}
                  cursor
                  cursorStyle="|"
                  typeSpeed={90}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <NavLink
                to="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </NavLink>
              <NavLink
                to="/"
                className="text-sm font-semibold leading-6 text-[#51D6FF]"
                onClick={() => {
                  const anchor = document.querySelector("#about-link");
                  anchor.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              >
                Learn more <span aria-hidden="true">→</span>
              </NavLink>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <ShareSocials />
    </div>
  );
}

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-600 mb-4 text-4xl tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-gray-900">
            What People Are Saying
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-gray-300 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                `SoulShare has made a significant impact in my community. The
                platform`s innovative approach to connecting people in need with
                those who can help is truly inspiring. I`ve witnessed lives
                being transformed through acts of kindness facilitated by
                SoulShare`
              </p>
              <div className="flex items-center space-x-3">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://api.dicebear.com/5.x/initials/svg?seed=Tharun"
                />
                <div>
                  <p className="font-semibold text-gray-900">Tharun</p>
                  {/* <p className="text-gray-600">Community Volunteer</p> */}
                </div>
              </div>
            </div>

            <div className="border border-gray-300 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                `SoulShare`s platform has given me the opportunity to make a
                real difference in the lives of others. I`ve been able to donate
                clothing and essentials to families in need, and the whole
                process has been seamless and rewarding. Thank you, SoulShare!`
              </p>
              <div className="flex items-center space-x-3">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://api.dicebear.com/5.x/initials/svg?seed=modal tharun"
                  alt="Testimonial Author"
                />
                <div>
                  <p className="font-semibold text-gray-900">modal tharun</p>
                  {/* <p className="text-gray-600">SoulShare Beneficiary</p> */}
                </div>
              </div>
            </div>

            <div className="border border-gray-300 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                `I`ve had the privilege of being a part of the SoulShare
                community since its inception. The impact it has made on
                bridging gaps and fostering connections is truly remarkable.
                It`s heartwarming to see people coming together to support one
                another.`
              </p>
              <div className="flex items-center space-x-3">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://api.dicebear.com/5.x/initials/svg?seed=Tonda"
                  alt="Testimonial Author"
                />
                <div>
                  <p className="font-semibold text-gray-900">Tonda tharun</p>
                  {/* <p className="text-gray-600">Social Activist</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

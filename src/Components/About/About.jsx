import React from "react";
import { TitleBar } from "../../Shared/TitleBar";
import AboutComponent from "./AboutComponent";
import { motion } from "motion/react";

const Section1 = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
  >
    {children}
  </motion.div>
);
const Section2 = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
  >
    {children}
  </motion.div>
);

const About = () => {
  return (
    <div id="about" className="bg-[#141414] px-4">
      <div className="text-center  pb-30 pt-30  max-w-[1500px] mx-auto">
        <h1 className="text-2xl md:text-5xl font-bold mb-10 text-white border-6 border-primary px-6 py-2 inline-block border-t-0 border-r-0">
          👤 About <span className="text-primary">Me</span>
        </h1>
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10 px-2 md:px-6">
          {/* Content */}
          <Section1>
            <AboutComponent></AboutComponent>
          </Section1>

          {/* Image */}
          <Section2>
            <div className="rounded-full  h-fit p-1 ring-1 ring-offset-1 ring-primary">
              <img
                className="rounded-full w-70 md:w-80 lg:w-90"
                src="/assets/about.jpg"
                alt=""
              />
            </div>
          </Section2>
        </div>
      </div>
    </div>
  );
};

export default About;

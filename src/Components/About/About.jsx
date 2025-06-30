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
    <div id="about">
      <div className="text-center  mb-30">
        <h1 className="text-2xl md:text-4xl font-bold mb-3">
          <TitleBar title="👤 About Me" />
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
        </h1>
      </div>
    </div>
  );
};

export default About;

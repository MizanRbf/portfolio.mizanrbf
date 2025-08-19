import React from "react";
import Slider3 from "./Slider3";
import TechBadges from "../TechBadges";
import { Link } from "react-router";
import { motion } from "motion/react";

const Section = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
  >
    {children}
  </motion.div>
);

const Project3 = () => {
  return (
    <Section>
      <div className="shadow-lg border border-gray-100 p-4 rounded-sm">
        <div>
          {/* Slider */}
          <div className="w-full mb-3">
            <Slider3></Slider3>
          </div>
          <div className="w-full text-left">
            {/* Title */}
            <h1 className="text-2xl lg:text-4xl font-bold mb-2 text-primary">
              Edufellow
            </h1>
            {/* Description */}
            <h3 className="text-sm mb-3">
              An educational platform for managing scholarships with user roles.
            </h3>

            {/* Button */}
            <div className="flex justify-end w-full">
              <Link to="/project_3">
                <button className="text-primary bg-secondary px-4 md:px-6 py-2 rounded-xs hover:bg-[#4c8626] hover:text-white cursor-pointer flex items-center gap-1 font-bold transform transition-all ease-in-out duration-300">
                  See Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Project3;

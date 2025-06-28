import React from "react";
import { TitleBar } from "../../Shared/TitleBar";
import Project1 from "./Project1/Project1";
import Project2 from "./Project2/Project2";
import Project3 from "./Project3/Project3";
import { motion } from "motion/react";

const Section = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
  >
    {children}
  </motion.div>
);

const Project = () => {
  return (
    <div id="projects">
      <div className="text-center  mb-30">
        <h1 className="text-2xl md:text-4xl font-bold mb-20">
          <TitleBar title="🖥️ My Projects" />
        </h1>
        {/* Projects Field */}

        <div className="space-y-6">
          {/* Project-1 */}
          <Section>
            <Project1></Project1>
          </Section>
          {/* Project-2 */}
          <Section>
            {" "}
            <Project2></Project2>
          </Section>
          {/* Project-3 */}
          <Section>
            <Project3></Project3>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Project;

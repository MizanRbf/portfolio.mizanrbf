import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsappSquare,
  FaPhoneAlt,
  FaCloudDownloadAlt,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

import { FaXTwitter } from "react-icons/fa6";
import { MdWavingHand } from "react-icons/md";
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

const Banner = () => {
  return (
    <div id="home" className="bg-black">
      <div className="pt-30 pb-13 flex items-center flex-col-reverse md:flex-row justify-between gap-4  max-w-[1500px] mx-auto px-4">
        {/* Left Section */}
        <Section1>
          <div>
            <div className="flex">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mr-3 mb-10">
                Hi, there
              </h2>
              <MdWavingHand size={30} className="text-primary" />
            </div>
            <h1 className="text-white mb-2 text-3xl md:text-4xl lg:text-6xl font-bold">
              I'm Mizanur Rahman
            </h1>
            <p className="text-[#c4c4c4] text-sm md:text-2xl lg:text-3xl font-bold mt-8">
              A passionate junior{" "}
              <span style={{ color: "green", fontWeight: "bold" }}>
                <Typewriter
                  words={[
                    "MERN Stack Developer",
                    "Front-End Developer",
                    "Full Stack Developer",
                  ]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
            <p className="bg-white text-secondary text-[10px] md:text-sm font-medium px-2 rounded-full inline-block text-shadow-lg">
              who loves building fast, responsive, and scalable web applications
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 text-4xl mb-8 mt-10 md:mt-14 text-white">
              <a
                className="hover:text-primary"
                href="https://github.com/MizanRbf"
              >
                <FaGithub />
              </a>

              <a
                className="hover:text-primary"
                href="https://www.linkedin.com/in/mizanrbf/"
              >
                <FaLinkedin />
              </a>

              <a className="hover:text-primary" href="https://x.com/MizanRbf/">
                <FaXTwitter />
              </a>
            </div>
            {/* Button */}
            <div className="flex gap-3">
              <a
                href="https://drive.google.com/file/d/1L-R_ksEAxTKKe-oNtp9MLtd8iSFhb2ga/view?usp=drive_link"
                target="blank"
                className="bg-primary px-4 py-2 rounded-xs hover:bg-[#4c8626] cursor-pointer flex items-center gap-1 font-bold"
              >
                <FaCloudDownloadAlt size={18} />
                RESUME
              </a>
              <a
                href="#contact"
                className="bg-white px-4 py-2 rounded-xs hover:bg-primary cursor-pointer font-bold"
              >
                Say Hello
              </a>
            </div>
          </div>
        </Section1>

        {/* Right section */}
        <Section2>
          <div className="p-1">
            <img
              className=" w-80 md:w-80   lg:w-100"
              src="/assets/mizan.png"
              alt=""
            />
          </div>
        </Section2>
      </div>
    </div>
  );
};

export default Banner;

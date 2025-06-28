import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsappSquare,
  FaPhoneAlt,
  FaCloudDownloadAlt,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { MdWavingHand } from "react-icons/md";

const Banner = () => {
  return (
    <div id="home" className="bg-secondary">
      <div className="pt-30 pb-13 flex items-center justify-between gap-4  max-w-[1500px] mx-auto px-4">
        <div>
          <div className="flex">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mr-3 mb-10">
              Hi, there
            </h2>
            <MdWavingHand size={30} className="text-primary" />
          </div>
          <h1 className="text-white mb-2 text-2xl md:text-4xl lg:text-6xl font-bold">
            I'm Mizanur Rahman
          </h1>
          <p className="text-[#c4c4c4] text-base md:text-2xl lg:text-3xl">
            A passionate Junior MERN Stack Developer.
          </p>
          {/* Social Icons */}
          <div className="flex gap-3 text-2xl md:text-4xl mb-8 mt-14 text-white">
            <a className="hover:text-primary" href="https://www.linkedin.com/">
              <FaLinkedin />
            </a>

            <a className="hover:text-primary" href="https://www.linkedin.com/">
              <FaGithub />
            </a>

            <a className="hover:text-primary" href="https://x.com/">
              <FaXTwitter />
            </a>
          </div>
          {/* Button */}
          <div className="flex gap-3">
            <button className="bg-primary px-4 py-2 rounded-xs hover:bg-[#4c8626] cursor-pointer flex items-center gap-1 font-bold">
              <FaCloudDownloadAlt size={18} />
              RESUME
            </button>
            <button className="bg-white px-4 py-2 rounded-xs hover:bg-primary cursor-pointer flex items-center gap-1 font-bold">
              <FaPhoneAlt size={18} />
              Contact
            </button>
          </div>
        </div>

        {/* Right section */}
        <div className="ring-1 rounded-full ring-white ring-offset-1 p-1">
          <img
            className="rounded-full w-50 md:w-80 lg:w-100"
            src="/assets/Banner.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

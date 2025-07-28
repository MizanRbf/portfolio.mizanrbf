import React from "react";
import { NavLink } from "react-router";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black py-10 border border-x-0 border-b-0 border-primary">
      <div className="flex-col md:flex-row  md:justify-between px-6 md:px-10 space-y-4">
        {/* Name */}
        <div className="flex justify-center">
          <img className="w-30" src="/assets/logo.png" alt="" />
        </div>
        {/* Social Icons */}
        <div className="flex gap-3 text-2xl md:text-4xl justify-center">
          <a
            className="text-gray-500 hover:text-primary"
            href="https://github.com/MizanRbf"
          >
            <FaGithub />
          </a>

          <a
            className="text-gray-500 hover:text-primary"
            href="https://www.linkedin.com/in/mizanrbf/"
          >
            <FaLinkedin />
          </a>

          <a
            className="text-gray-500 hover:text-primary"
            href="https://x.com/MizanRbf/"
          >
            <FaXTwitter />
          </a>

          <a
            className="text-gray-500 hover:text-primary"
            href="https://wa.me/8801609583916"
          >
            <FaWhatsappSquare />
          </a>
        </div>
        <hr className="border-dashed text-primary" />

        {/* Copy Right */}
        <div class="text-gray-500 text-center text-sm">
          &copy; 2025 <span class="font-semibold">Mizanur Rahman</span>. All
          rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;

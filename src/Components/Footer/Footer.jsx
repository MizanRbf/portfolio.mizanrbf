import React from "react";
import { NavLink } from "react-router";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-secondary py-10 border border-x-0 border-b-0 border-primary">
      <div className="flex-col md:flex-row  md:justify-between px-4 md:px-10 space-y-4">
        {/* Name */}
        <div className="">
          <h1 className="text-2xl md:text-4xl font-bold text-primary text-center">
            Mizanur Rahman
          </h1>
        </div>
        {/* Social Icons */}
        <div className="flex gap-3 text-2xl md:text-4xl justify-center">
          <a className="hover:text-primary" href="https://www.linkedin.com/">
            <FaLinkedin />
          </a>

          <a className="hover:text-primary" href="https://www.linkedin.com/">
            <FaGithub />
          </a>

          <a className="hover:text-primary" href="https://x.com/">
            <FaXTwitter />
          </a>

          <a className="hover:text-primary" href="https://www.whatsapp.com/">
            <FaWhatsappSquare />
          </a>
        </div>
        <hr className="border-dashed text-primary" />

        {/* Copy Right */}
        <div class="text-center text-sm">
          &copy; 2025 <span class="font-semibold">Mizanur Rahman</span>. All
          rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;

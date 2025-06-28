import React from "react";
import { TitleBar } from "../../Shared/TitleBar";
import { IoHome } from "react-icons/io5";
import {
  FaGithub,
  FaLinkedin,
  FaPhoneSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
// import { motion } from "motion/react";

// const Section = ({ children }) => (
//   <motion.div
//     initial={{ opacity: 0, x: 20 }}
//     whileInView={{ opacity: 1, x: 0 }}
//     transition={{ duration: 0.6, ease: "easeOut" }}
//     viewport={{ once: true, amount: 0.3 }}
//   >
//     {children}
//   </motion.div>
// );

const Contact = () => {
  return (
    <div id="contact" className=" mb-20 z-0">
      {/* Title */}
      <div className="text-center mt-22 md:mt-14 px-4 md:px-0 mb-10">
        <h1 className="text-2xl md:text-4xl font-bold mb-3">
          <TitleBar title="Contact Me" />
        </h1>
      </div>
      {/* Contact */}
      <div className="flex items-center px-4">
        {/* Description */}
        <div className="w-full space-y-4 font-bold">
          <h1 className="text-xl md:text-5xl font-bold mb-8">Get in Touch</h1>
          <div className="flex items-center  gap-1">
            <IoHome size={35} />
            <p className="text-xl">Shamakhdum, Rajshahi</p>
          </div>
          <div className="flex items-center gap-1">
            <FaPhoneSquare size={35} />
            <p className="text-xl">+880-1319687088</p>
          </div>
          <div className="flex items-center gap-1">
            <FaWhatsappSquare size={35} />
            <p className="text-xl">+880-1609583916</p>
          </div>
          <div className="flex items-center  gap-1">
            <IoMdMail size={35} />
            <p className="text-xl">mizanrbf@gmail.com</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 text-2xl md:text-6xl mb-8 mt-14 text-black">
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
        </div>
        {/* Form */}

        <div className=" border rounded-sm w-full border-secondary">
          <div className="px-6 py-6 bg-secondary ">
            <fieldset className="fieldset">
              <label className="text-white">Your Name</label>
              <input
                type="text"
                className="border border-white rounded-xs py-3 pl-2 w-full bg-white"
                placeholder="Name..."
              />
              <label className="text-white">Your Email</label>
              <input
                type="email"
                className="border border-secondary rounded-xs py-3 pl-2 w-full bg-white"
                placeholder="Email..."
              />
              <label className="text-white"> Message</label>
              <textarea
                rows={5}
                type="text"
                className="border border-secondary rounded-xs w-full pl-2 bg-white"
                placeholder="Text Here"
              />

              <button className="bg-primary text-white text-lg rounded-xs py-1 shadow-xl mt-4">
                Send
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

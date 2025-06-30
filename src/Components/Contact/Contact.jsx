import React, { useRef } from "react";
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
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import { motion } from "motion/react";

const Section1 = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
  >
    {children}
  </motion.div>
);
const Section2 = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
  >
    {children}
  </motion.div>
);

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1tl7k8c",
        "template_88eueta",
        form.current,
        "eE11Jr1RKLDjHi_0W"
      )
      .then(
        () => {
          Swal.fire({
            title: "Message Sent Successfully!",
            icon: "success",
            draggable: true,
          });
          form.current.reset();
        },
        (error) => {
          alert("Failed to send. Error: " + error.text);
        }
      );
  };
  return (
    <div id="contact" className=" mb-20 z-0">
      {/* Title */}
      <div className="text-center  mb-20">
        <h1 className="text-2xl md:text-4xl font-bold mb-3">
          <TitleBar title="📬Contact Me" />
        </h1>
      </div>
      {/* Contact */}
      <div className="flex items-center flex-col md:flex-row px-2 md:px-6">
        {/* Description */}

        <div className="w-full space-y-4 font-bold">
          <Section2>
            <h1 className="text-3xl md:text-5xl font-bold mb-8">
              Let’s Get in Touch
            </h1>
            <div className="flex items-center  gap-1">
              <IoHome size={35} />
              <p className="text-xl"> Rajshahi, Bangladesh</p>
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
            <div className="flex gap-3 text-4xl md:text-6xl mb-8 mt-14 text-black">
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
              <a
                className="hover:text-primary"
                href="https://wa.me/8801609583916"
              >
                <FaWhatsappSquare />
              </a>
            </div>
          </Section2>
        </div>

        {/* Form */}
        <div className=" w-full border-secondary">
          <Section1>
            <div className="px-6 py-6 bg-secondary rounded-sm">
              <h1 className="text-primary text-4xl font-bold mb-4">
                Fill the Form to Connect
              </h1>
              <form ref={form} onSubmit={handleSubmit} className="fieldset">
                <label className="text-white">Your Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="border border-white rounded-xs py-3 pl-2 w-full bg-white"
                  placeholder="Name..."
                />
                <label className="text-white">Your Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="border border-secondary rounded-xs py-3 pl-2 w-full bg-white"
                  placeholder="Email..."
                />
                <label className="text-white"> Message</label>
                <textarea
                  rows={5}
                  type="text"
                  name="user_message"
                  className="border border-secondary rounded-xs w-full pl-2 bg-white"
                  placeholder="Text Here"
                />

                <button
                  type="submit"
                  className="bg-primary text-white text-lg rounded-xs py-1 shadow-xl mt-4"
                >
                  Send
                </button>
              </form>
            </div>
          </Section1>
        </div>
      </div>
    </div>
  );
};

export default Contact;

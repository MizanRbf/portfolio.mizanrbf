import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={` text-black fixed right-0 top-0 left-0 z-999 transform transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-[#000000] py-1 shadow-xl"
          : "bg-black py-2 border border-t-0 border-x-0 border-primary"
      }`}
    >
      <div className="flex justify-between items-center max-w-[1500px] mx-auto px-4">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="flex items-center">
            <img className="w-14" src="/assets/logo2.png" alt="" />
            <p className="text-4xl font-bold text-primary">
              Miza
              <span className="text-white">n</span>
              Rbf
            </p>
          </div>
        </div>

        {/* Menubar for Large Device */}
        <div
          className={`lg:flex *:px-3 gap-4 transition-all duration-500 ease-in-out font-bold hidden items-center text-white`}
        >
          <ul className="flex gap-8">
            <li className="hover:text-primary">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-primary">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-primary">
              <a href="#education">Education</a>
            </li>

            <li className="hover:text-primary">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:text-primary">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-primary">
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
          <a
            href="https://drive.google.com/file/d/1L-R_ksEAxTKKe-oNtp9MLtd8iSFhb2ga/view?usp=drive_link"
            target="blank"
            className="bg-primary px-4 py-2 rounded-xs hover:bg-[#4c8626] cursor-pointer flex items-center gap-1"
          >
            Resume
            <FaDownload size={14} />
          </a>
        </div>

        {/* Responsive Icon */}
        <div className="py-1 px-3 rounded-sm lg:hidden bg-slate-200 shadow-2xl">
          <span onClick={() => setOpen(!open)}>
            {open ? (
              <RxCross2 className="cursor-pointer   text-2xl" />
            ) : (
              <MdMenu className="cursor-pointer text-2xl" />
            )}
          </span>
        </div>
        {/* Menubar for Small Device */}
        <nav
          className={`top-18 lg:hidden right-0 left-0 absolute py-6 shadow bg-[rgba(0,0,0,0.81)]  text-lg font-bold text-white transform transition-all ease-in-out duration-300 z-50 ${
            open
              ? "opacity-100 translate-y-2 visible"
              : "opacity-0 -translate-y-5 invisible"
          }`}
        >
          <ul className="px-10 *:hover:bg-white *:hover:text-black  *:hover:duration-300 space-y-2">
            <li>
              <a
                href="#home"
                className="w-full text-left cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <button className="w-full text-left">Home</button>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="w-full text-left cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <button className="w-full text-left">About</button>
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="w-full text-left cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <button className="w-full text-left">Skills</button>
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="w-full text-left cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <button className="w-full text-left">Education</button>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="w-full text-left cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <button className="w-full text-left">Projects</button>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="w-full text-left cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <button className="w-full text-left">Contact Me</button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

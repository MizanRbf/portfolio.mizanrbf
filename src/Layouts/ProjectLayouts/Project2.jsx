import React from "react";

import { Link } from "react-router";
import Slider2 from "../../Components/Projects/Project2/Slider2";
import TechBadges from "../../Components/Projects/TechBadges";
import { IoReturnDownBackOutline } from "react-icons/io5";

const Project2 = () => {
  return (
    <div className="border min-h-screen overflow-y-auto bg-black p-10 flex items-center justify-center">
      <div className="shadow-lg border border-gray-100 p-4 rounded-sm max-w-[1500px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          {/* Left Section */}
          <div className="w-full">
            <div className="w-full mb-6">
              <Slider2></Slider2>
            </div>

            {/* Title */}
            <div className="items-center gap-5 mb-6  lg:hidden flex text-white">
              <h1 className="text-2xl lg:text-4xl font-bold text-primary">
                Langveta
              </h1>
              <p className="text-lg">(Language Tutor Service)</p>
            </div>
            {/* Tech Stacks */}
            <div className="mb-6">
              <h2 className="font-bold underline mb-1 text-white">
                Tech Stacks :
              </h2>
              <TechBadges></TechBadges>
            </div>

            {/* Button */}
            <div className="flex gap-3 justify-between items-center">
              {/* Back Button */}
              <Link to={-1}>
                <button className="bg-amber-500 text-white py-1 text-sm md:text-lg px-3 font-bold  cursor-pointer flex items-center gap-2 rounded-full">
                  <IoReturnDownBackOutline />
                  Go back
                </button>
              </Link>
              <div className="flex gap-2">
                <a
                  href="https://langveta-client.web.app"
                  target="blank"
                  className="bg-secondary px-2 md:px-6 py-2 rounded-xs hover:bg-[#4c8626] hover:text-white cursor-pointer flex items-center gap-1 font-bold transform transition-all ease-in-out duration-300 text-primary"
                >
                  Live
                </a>
                <a
                  href="https://github.com/MizanRbf/langveta-client"
                  target="blank"
                  className=" px-2 md:px-6 py-2 rounded-xs hover:bg-[#4c8626] hover:text-white cursor-pointer flex items-center gap-1 font-bold transform transition-all ease-in-out duration-300 text-primary bg-secondary"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full text-left text-white">
            {/* Title */}
            <div className="items-center gap-5 mb-6 hidden lg:flex ">
              <h1 className="text-2xl lg:text-4xl font-bold text-primary">
                Langveta
              </h1>
              <p className="text-lg">(Language Tutor Service)</p>
            </div>
            {/* Description */}
            <h3 className="text-sm mb-2">
              Langveta is a feature-rich, fully responsive web application. It
              serves as an intuitive platform for learners to connect with
              expert language tutors, explore categorized tutorials.
            </h3>
            {/* Key Features */}
            <div className="mb-2">
              <h2 className="font-bold underline mb-1">Key Features :</h2>
              <ul className="text-xs md:text-sm">
                <li>✔️Tutor Management System</li>
                <li>✔️See top rated tutors</li>
                <li>✔️Search by category wise</li>
              </ul>
            </div>
            {/* Potential Improvements &  Future Plans */}
            <div className="mb-2">
              <h2 className="font-bold underline mb-1">
                Potential Improvements & Future Plans :
              </h2>
              <ul className="text-xs md:text-sm">
                <li>🎖️ Tutor Rating & Verification System</li>
                <li>🔍 Advanced Filtering & Search</li>
                <li>🌍 Multi-Language Support</li>
                <li>📝 Lesson Plan & Progress Tracker</li>
                <li>💬 Chat/Messaging System</li>
              </ul>
            </div>
            {/* Faced Challenges */}
            <div className="mb-2">
              <h2 className="font-bold underline mb-1">Faced Challenges :</h2>
              <ul className="text-xs md:text-sm">
                <li>1.Dynamic Tutorial Management</li>
                <li>2.Secure API Integration</li>
                <li>3.Dark Mode & Theme Switching</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;

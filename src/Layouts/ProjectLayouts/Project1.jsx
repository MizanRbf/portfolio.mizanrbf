import React from "react";
import Slider1 from "../../Components/Projects/Project1/Slider1";
import TechBadges from "../../Components/Projects/TechBadges";
import { Link } from "react-router";
import { IoReturnDownBackOutline } from "react-icons/io5";

const Project1 = () => {
  return (
    <div className="w-full p-10  flex items-center px-10">
      <div className="shadow-lg border border-gray-100 p-4 rounded-sm max-w-[1500px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 items-center ">
          {/* Left Section */}
          <div className="w-full">
            <div className="w-full mb-6 flex flex-col lg:flex-row gap-6 items-center">
              <Slider1></Slider1>
            </div>
            {/* Title */}
            <h1 className="text-2xl lg:text-4xl font-bold mb-3 text-primary lg:hidden">
              Skilnado
            </h1>
            {/* Tech Stacks */}
            <div className="mb-6">
              <h2 className="font-bold underline mb-1">Tech Stacks :</h2>
              <TechBadges></TechBadges>
            </div>

            {/* Button */}
            <div className="flex gap-3 justify-between items-center">
              {/* Back Button */}
              <Link to={-1}>
                <button className="bg-amber-500 text-white text-sm md:text-lg px-3 py-1  font-bold  cursor-pointer flex items-center gap-2 rounded-full">
                  <IoReturnDownBackOutline />
                  Go back
                </button>
              </Link>
              <div className="flex gap-2">
                <a
                  href="https://skilnado.web.app"
                  target="blank"
                  className="bg-secondary px-2 md:px-6 py-2 rounded-xs hover:bg-[#4c8626] hover:text-white cursor-pointer flex items-center gap-1 font-bold transform transition-all ease-in-out duration-300 text-primary"
                >
                  Live
                </a>
                <a
                  href="https://github.com/MizanRbf/skilnado-client"
                  target="blank"
                  className=" px-2 md:px-6 py-2 rounded-xs hover:bg-[#4c8626] hover:text-white cursor-pointer flex items-center gap-1 font-bold transform transition-all ease-in-out duration-300 text-primary bg-secondary"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full text-left">
            {/* Title */}
            <h1 className="text-2xl lg:text-4xl font-bold mb-3 text-primary hidden lg:block">
              Skilnado
            </h1>
            {/* Description */}
            <h3 className="text-sm mb-2">
              A dynamic task marketplace platform that connects clients and
              freelancers. Users can post skill-based tasks, bid for jobs,
              manage submissions, and collaborate in a secure and interactive
              environment.
            </h3>
            {/* Key Features */}
            <div className="mb-2">
              <h2 className="font-bold underline mb-1">Key Features :</h2>
              <ul className="text-xs md:text-sm">
                <li>✔️Task management in all way</li>
                <li>✔️Freelancer showcase</li>
                <li>✔️Performance Overview at a Glance</li>
              </ul>
            </div>
            {/* Potential Improvements & Future Plans */}
            <div className="mb-2">
              <h2 className="font-bold underline mb-1">
                Potential Improvements & Future Plans :
              </h2>
              <ul className="text-xs md:text-sm">
                <li>🔐 Role-Based Dashboard Access</li>
                <li>💬 Real-time Messaging System</li>
                <li>💰 Payment Gateway Integration</li>
                <li>📩 Notification System</li>
                <li>📱 Mobile App Version</li>
              </ul>
            </div>
            {/* Faced Challenges */}
            <div className="mb-2">
              <h2 className="font-bold underline mb-1">Faced Challenges :</h2>
              <ul className="text-xs md:text-sm">
                <li>1.Role-Based Access & Route Protection</li>
                <li>2.Task Filtering and Ownership Logic</li>
                <li>3.UI Consistency Across Device Sizes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;

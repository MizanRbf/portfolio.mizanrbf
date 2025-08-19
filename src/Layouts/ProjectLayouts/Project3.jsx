import React from "react";

import { Link } from "react-router";
import Slider3 from "../../Components/Projects/Project3/Slider3";
import TechBadges from "../../Components/Projects/TechBadges";
import { IoReturnDownBackOutline } from "react-icons/io5";

const Project3 = () => {
  return (
    <div className="border min-h-screen overflow-y-auto bg-black p-10 flex items-center justify-center">
      <div className="shadow-lg border border-gray-100 p-4 rounded-sm max-w-[1500px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          {/* Left Section */}
          <div className="w-full">
            <div className="w-full flex flex-col lg:flex-row gap-6 items-center">
              <Slider3></Slider3>
            </div>

            {/* Title */}
            <div className="items-center gap-5 mb-6 lg:hidden flex text-white">
              <h1 className="text-2xl lg:text-4xl font-bold text-primary">
                Edufellow
              </h1>
              <p className="text-lg">(Scholarship Management Platform)</p>
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
              <Link to={-1}>
                <button className="bg-amber-500 text-white text-sm md:text-lg px-3 py-1  font-bold  cursor-pointer flex items-center gap-2 rounded-full">
                  <IoReturnDownBackOutline />
                  Go back
                </button>
              </Link>
              <div className="flex gap-2">
                <a
                  href="https://edufellow-client.web.app/"
                  className="bg-secondary px-2 md:px-6 py-2 rounded-xs hover:bg-[#4c8626] hover:text-white cursor-pointer flex items-center gap-1 font-bold transform transition-all ease-in-out duration-300 text-primary"
                >
                  Live
                </a>
                <a
                  href="https://github.com/MizanRbf/edufellow-client"
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
                Edufellow
              </h1>
              <p className="text-lg">(Scholarship Management Platform)</p>
            </div>

            {/* Description */}
            <h3 className="text-sm mb-2">
              Developed and maintained the full-stack EDUFELLOW-CLIENT web
              application, an educational platform designed to streamline
              scholarship management, user applications, review processes, and
              manage various user roles (e.g., student, admin, moderator). On
              the front-end, utilized React.js to build dynamic and responsive
              user interfaces. For the back-end, implemented robust APIs using
              Node.js and Express.js, and managed data persistence with MongoDB.
              Key responsibilities included developing features such as user
              dashboards, scholarship listings, application forms, profile
              management, and integrating payment functionalities for
              transactions, ensuring a seamless and intuitive user experience
              for all users.
            </h3>
            {/* Key Features */}
            <div className="mb-2">
              <h2 className="font-bold underline mb-1">Key Features :</h2>
              <ul className="text-xs md:text-sm">
                <li>✔️Integrated Payment Gateway</li>
                <li>✔️Role-Based Access Control</li>
                <li>✔️Review and Rating System</li>
              </ul>
            </div>
            {/* Potential Improvements & Future Plans */}
            <div className="mb-2">
              <h2 className="font-bold underline mb-1">
                Potential Improvements & Future Plans :
              </h2>
              <ul className="text-xs md:text-sm">
                <li>🎖️Tutor Rating & Verification System</li>
                <li>🔍Advanced Filtering & Search</li>
                <li>🌍Multi-Language Support</li>
                <li>📝Lesson Plan & Progress Tracker</li>
                <li>💬Chat/Messaging System</li>
              </ul>
            </div>
            {/* Faced Challenges */}
            <div className="mb-2">
              <h2 className="font-bold underline mb-1">Faced Challenges :</h2>
              <ul className="text-xs md:text-sm">
                <li>1.Integrated Payment Gateway</li>
                <li>2.Role-Based Access Control</li>
                <li>3.Dashboard Responsiveness</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project3;

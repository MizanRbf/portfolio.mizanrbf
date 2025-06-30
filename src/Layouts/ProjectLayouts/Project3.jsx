import React from "react";

import { Link } from "react-router";
import Slider3 from "../../Components/Projects/Project3/Slider3";
import TechBadges from "../../Components/Projects/TechBadges";
import { IoReturnDownBackOutline } from "react-icons/io5";

const Project3 = () => {
  return (
    <div className="w-full flex items-center p-10">
      <div className="shadow-lg border border-gray-100 p-4 rounded-sm max-w-[1500px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          {/* Left Section */}
          <div className="w-full">
            <div className="w-full flex flex-col lg:flex-row gap-6 items-center">
              <Slider3></Slider3>
            </div>

            {/* Title */}
            <h1 className="text-2xl lg:text-4xl font-bold mb-3 text-primary lg:hidden">
              Subnestic
            </h1>
            {/* Tech Stacks */}
            <div className="mb-6">
              <h2 className="font-bold underline mb-1">Tech Stacks :</h2>
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
                  href="https://subnestic.web.app"
                  className="bg-secondary px-2 md:px-6 py-2 rounded-xs hover:bg-[#4c8626] hover:text-white cursor-pointer flex items-center gap-1 font-bold transform transition-all ease-in-out duration-300 text-primary"
                >
                  Live
                </a>
                <a
                  href="https://github.com/MizanRbf/subnestic-client"
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
              Subnestic
            </h1>
            {/* Description */}
            <h3 className="text-sm mb-2">
              Subnestic is a sleek and scalable web application that allows
              users to explore, review, and subscribe to curated subscription
              boxes tailored to their preferences. Designed with performance,
              accessibility, and modern UX in mind, this project showcases
              front-end development with real-world features. It includes user
              authentication, protected routes, reviews, and an interactive user
              interface.
            </h3>
            {/* Key Features */}
            <div className="mb-2">
              <h2 className="font-bold underline mb-1">Key Features :</h2>
              <ul className="text-xs md:text-sm">
                <li>✔️Subscription Box Service</li>
                <li>✔️User Reviews & Testimonials</li>
                <li>✔️Structured Routing & Layouts</li>
              </ul>
            </div>
            {/* Potential Improvements & Future Plans */}
            <div className="mb-2">
              <h2 className="font-bold underline mb-1">
                Potential Improvements & Future Plans :
              </h2>
              <ul className="text-xs md:text-sm">
                <li>🧾 Subscription Plan Customization</li>
                <li>🗂️ Wishlist & Save for Later</li>
                <li>💳 Integrated Payment Gateway</li>
                <li>📦 Track Shipping Status</li>
                <li>💬 User-to-User Review Replies</li>
              </ul>
            </div>
            {/* Faced Challenges */}
            <div className="mb-2">
              <h2 className="font-bold underline mb-1">Faced Challenges :</h2>
              <ul className="text-xs md:text-sm">
                <li>1.Local Storage for Order Management</li>
                <li>2.Review & Testimonial System Simulation</li>
                <li>3.Chart & Data Visualization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project3;

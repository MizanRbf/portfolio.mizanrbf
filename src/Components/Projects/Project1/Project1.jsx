import React from "react";
import Slider1 from "./Slider1";
import TechBadges from "../TechBadges";

const Project1 = () => {
  return (
    <div className="shadow-lg border border-gray-100 p-4 rounded-sm">
      <div className="flex flex-col md:flex-row md:gap-6">
        {/* Slider */}
        <div className="w-full h-full">
          <Slider1></Slider1>
        </div>
        <div className="w-full text-left">
          {/* Title */}
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-2 text-primary">
            Skilnado
          </h1>
          {/* Description */}
          <h3 className="text-sm mb-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
            facere esse magni quaerat earum omnis tempor
          </h3>
          {/* Key Features */}
          <div className="mb-2">
            <h2 className="font-bold underline mb-1">Key Features :</h2>
            <ul className="text-xs md:text-sm">
              <li>key features 1</li>
              <li>key features 2</li>
              <li>key features 3</li>
            </ul>
          </div>
          {/* Tech Stacks */}
          <div className="mb-6">
            <h2 className="font-bold underline mb-1">Tech Stacks :</h2>
            <TechBadges></TechBadges>
          </div>

          {/* Button */}
          <div className="flex gap-3">
            <button className="bg-secondary px-8 py-2 rounded-xs hover:bg-[#4c8626] hover:text-white cursor-pointer flex items-center gap-1 font-bold transform transition-all ease-in-out duration-300 text-primary">
              Live
            </button>
            <button className=" px-6 py-2 rounded-xs hover:bg-[#4c8626] hover:text-white cursor-pointer flex items-center gap-1 font-bold transform transition-all ease-in-out duration-300 text-primary bg-secondary">
              GitHub
            </button>
            <button className="text-primary bg-secondary px-6 py-2 rounded-xs hover:bg-[#4c8626] hover:text-white cursor-pointer flex items-center gap-1 font-bold transform transition-all ease-in-out duration-300">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;

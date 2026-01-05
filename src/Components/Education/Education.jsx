import React from "react";
import { TitleBar } from "../../Shared/TitleBar";
import EducationComponent from "./EducationCoponent";

const Education = () => {
  return (
    <div
      id="education"
      className="relative bg-[url('/assets/RU.jpg')] bg-cover bg-center pb-30 pt-30"
    >
      <div className="text-center  max-w-[1500px] mx-auto">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0c0c0ca1] z-0 backdrop-blur-xs"></div>

        {/* Title */}
        <h1 className="relative text-2xl md:text-4xl font-bold mb-10 text-white border-6 border-primary px-6 py-2 inline-block border-t-0 border-l-0">
          🎓 <span className="text-primary">Education</span> and Courses
        </h1>

        {/* Content */}

        <div className="relative px-2 md:px-6 z-10">
          <EducationComponent></EducationComponent>
        </div>
      </div>
    </div>
  );
};

export default Education;

import React from "react";
import { TitleBar } from "../../Shared/TitleBar";
import SkillsComponent from "./skillsComponent";

const Skills = () => {
  return (
    <div id="skills" className="pb-30 pt-30 bg-[#141414]">
      <div className="text-center  max-w-[1500px] mx-auto">
        <h1 className="relative text-2xl md:text-4xl font-bold mb-10 border-6 border-primary px-6 py-2 inline-block border-t-0 border-r-0 text-white">
          🛠 My <span className="text-primary">Skills</span>
        </h1>
        {/* Skills */}
        <div className="px-2 md:px-6">
          <SkillsComponent></SkillsComponent>
        </div>
      </div>
    </div>
  );
};

export default Skills;

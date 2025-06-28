import React from "react";
import { TitleBar } from "../../Shared/TitleBar";
import SkillsComponent from "./skillsComponent";

const Skills = () => {
  return (
    <div id="skills">
      <div className="text-center  mb-30">
        <h1 className="text-2xl md:text-4xl font-bold mb-3">
          <TitleBar title="🛠 My Skills" />
        </h1>
        {/* Skills */}
        <div>
          <SkillsComponent></SkillsComponent>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import React from "react";
import { TitleBar } from "../../Shared/TitleBar";
import EducationComponent from "./EducationCoponent";

const Education = () => {
  return (
    <div id="education">
      <div className="text-center mb-30">
        <h1 className="text-2xl md:text-4xl font-bold mb-3">
          <TitleBar title="🎓 Education and Courses" />
          <div className="px-2 md:px-6">
            <EducationComponent></EducationComponent>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Education;

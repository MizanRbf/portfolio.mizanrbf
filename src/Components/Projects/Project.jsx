import React from "react";
import { TitleBar } from "../../Shared/TitleBar";
import Project1 from "./Project1/Project1";
import Project2 from "./Project2/Project2";
import Project3 from "./Project3/Project3";

const Project = () => {
  return (
    <div id="projects">
      <div className="text-center mt-22 md:mt-14 px-4 md:px-0 mb-20">
        <h1 className="text-2xl md:text-4xl font-bold mb-20">
          <TitleBar title="My Projects" />
        </h1>
        {/* Projects Field */}

        {/* Project-1 */}
        <Project1></Project1>
        {/* Project-2 */}
        <Project2></Project2>
        {/* Project-3 */}
        <Project3></Project3>
      </div>
    </div>
  );
};

export default Project;

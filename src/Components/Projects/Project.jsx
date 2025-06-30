import React from "react";
import { TitleBar } from "../../Shared/TitleBar";
import Project1 from "./Project1/Project1";
import Project2 from "./Project2/Project2";
import Project3 from "./Project3/Project3";

const Project = () => {
  return (
    <div id="projects">
      <div className="text-center  mb-30">
        <h1 className="text-2xl md:text-4xl font-bold mb-20">
          <TitleBar title="🖥️ My Projects" />
        </h1>
        {/* Projects Field */}

        <div className="px-2 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Project-1 */}
          <Project1></Project1>
          {/* Project-2 */} <Project2></Project2>
          {/* Project-3 */}
          <Project3></Project3>
        </div>
      </div>
    </div>
  );
};

export default Project;

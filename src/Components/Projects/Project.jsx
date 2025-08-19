import React from "react";
import { TitleBar } from "../../Shared/TitleBar";
import Project1 from "./Project1/Project1";
import Project2 from "./Project2/Project2";
import Project3 from "./Project3/Project3";

const Project = () => {
  return (
    <div id="projects" className="pb-30 pt-30 bg-black px-4">
      <div className="text-center max-w-[1500px] mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold mb-15 border-6 border-primary px-6 py-2 inline-block border-t-0 border-l-0 text-white">
          🖥️ <span className="text-primary">My</span> Projects
        </h1>
        {/* Projects Field */}

        <div className="px-2 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
          {/* Project-3 */}
          <Project3></Project3>
          {/* Project-2 */}
          <Project2></Project2>
          {/* Project-1 */}
          <Project1></Project1>
        </div>
      </div>
    </div>
  );
};

export default Project;

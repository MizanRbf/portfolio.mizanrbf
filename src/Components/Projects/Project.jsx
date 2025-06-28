import React from "react";
import { TitleBar } from "../../Shared/TitleBar";

const Project = () => {
  return (
    <div id="projects">
      <div className="text-center mt-22 md:mt-14 px-4 md:px-0 mb-10">
        <h1 className="text-2xl md:text-4xl font-bold mb-3 text-blue-600">
          <TitleBar title="Projects" />
        </h1>
      </div>
    </div>
  );
};

export default Project;

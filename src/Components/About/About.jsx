import React from "react";
import { TitleBar } from "../../Shared/TitleBar";
import AboutComponent from "./AboutComponent";

const About = () => {
  return (
    <div id="about">
      <div className="text-center  mb-30">
        <h1 className="text-2xl md:text-4xl font-bold mb-3">
          <TitleBar title="👤 About Me" />
          <AboutComponent></AboutComponent>
        </h1>
      </div>
    </div>
  );
};

export default About;

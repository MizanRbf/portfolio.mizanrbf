import React from "react";
import { TitleBar } from "../../Shared/TitleBar";
import AboutComponent from "./AboutComponent";

const About = () => {
  return (
    <div id="about">
      <div className="text-center  mb-30">
        <h1 className="text-2xl md:text-4xl font-bold mb-3">
          <TitleBar title="👤 About Me" />
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10 px-2 md:px-6">
            <AboutComponent></AboutComponent>
            <div className="rounded-full  h-fit p-1 ring-1 ring-offset-1 ring-primary">
              <img
                className="rounded-full w-70 md:w-80 lg:w-90"
                src="/assets/about.jpg"
                alt=""
              />
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default About;

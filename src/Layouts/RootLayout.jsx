import React from "react";

import About from "../Components/About/About";

import Education from "../Components/Education/Education";
import Skills from "../Components/Skills/Skills";
import Project from "../Components/Projects/Project";
import Contact from "../Components/Contact/Contact";
import Banner from "../Components/Banner/Banner";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <header className="">
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main className="">
        <About></About>
        <Education></Education>
        <Skills></Skills>
        <Project></Project>
        <Contact>`</Contact>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;

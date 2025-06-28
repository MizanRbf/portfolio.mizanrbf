import React from "react";
import Navbar from "../Components/Navbar/navbar";
import About from "../Components/About/About";
import Banner from "../Components/Banner/banner";
import Footer from "../Components/Footer/footer";
import Education from "../Components/Education/Education";
import Skills from "../Components/Skills/Skills";
import Project from "../Components/Projects/Project";
import Contact from "../Components/Contact/Contact";

const RootLayout = () => {
  return (
    <div>
      <header className="">
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main className="max-w-[1500px] mx-auto px-4">
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

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skill from "./components/Skill/Skill";
import Workexperience from "./components/Workexperience/Workexperience";
import Contectme from "./components/ContectMe/Contectme";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Project";


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skill />
        <Workexperience />
        <Project />
        <Contectme />
      </div>
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skill from "./components/Skill/Skill";
import Workexperience from "./components/Workexperience/Workexperience";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skill/>
        <Workexperience/>
      </div>
    </>
  );
}

export default App;

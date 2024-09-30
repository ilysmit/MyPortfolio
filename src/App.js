import React from "react";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skill from "./components/Skill/Skill";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skill/>
      </div>
    </>
  );
}

export default App;

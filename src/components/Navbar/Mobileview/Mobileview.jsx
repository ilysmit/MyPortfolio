import React from "react";
import "./Mobileview.css";

function Mobileview({ isOpen, toggleMenu }) {
  return (
    <div
      className={`mobile-menu ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <div className="mobile-menu-container">
        {/* //add image is hear to add url only */}
        <img className="logo" src="./" alt="" />
        <ul>
          <li>
            <a className="menu-item"> Home </a>
          </li>
          <li>
            <a className="menu-item"> Skill </a>
          </li>
          <li>
            <a className="menu-item"> Work Experience </a>
          </li>
          <li>
            <a className="menu-item"> Contact Me </a>
          </li>
        </ul>
        <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
      </div>
    </div>
  );
}

export default Mobileview;

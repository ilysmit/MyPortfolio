import React from "react";
import "./Navbar.css";
import Mobileview from "./Mobileview/Mobileview";



function Navbar() {


        const[openMenu , setOpenManu] = React.useState(false);

            const toggleMenu = () =>{
                setOpenManu(!openMenu);
            };
  return (
    <>
            <Mobileview isOpen={openMenu} toggleMenu={toggleMenu}/>

      <nav className="nav-wreppar">
        <div className="nav-content">
          <img className="logo" src="" alt="" />
          <ul>
            <li>
              <a href="#home" className="menu-item"> Home </a>
            </li>
            <li>
              <a href="#skill" className="menu-item"> Skill </a>
            </li>
            <li>
              <a href="#work" className="menu-item"> Work Experience </a>
            </li>
            <li>
              <a href="#contact" className="menu-item"> Contact Me </a>
            </li>

            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
          <button class="menu-btn" onClick={toggleMenu}>
            <span
              class={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
              >
              {openMenu ? "close" : "menu" }
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

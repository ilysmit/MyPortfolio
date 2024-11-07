import React from "react";
import "./Contectme.css";
import ContatInfoCard from "./ContactInfoCard/ContatInfoCard";
import Contectform from "./Contectform/Contectform";

const Contectme = () => {
  return (
    <section id="contact" className="contect-container">
      <h5>Contact Me</h5>
      <div className="contect-contect">
        <div style={{ flex: 1 } }>
          <ContatInfoCard
           iconUrl="https://deshanwickramaarachchi.pro/assets/images/email-icon.svg"
           text = "itsmit.work@gmail.com"/>
           <ContatInfoCard
           iconUrl="https://deshanwickramaarachchi.pro/assets/images/github-icon.svg"
           text = "https://github.com/ilysmit"/>
        </div>
        <div style={{ flex: 1 }}>
          <Contectform/>
        </div>
      </div>
    </section>
  );
};

export default Contectme;



import React, { useRef } from "react";
import "./project.css";
import { PROJECTS } from "../../utils/data";
import Slider from "react-slick";
import Projectcard from "./Projectcard/Projectcard";
const Project = () => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    isfinite: true,
    speed: 550,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,

    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="experience-container">
      <h5>Projects</h5>

      <div className="experience-content">
        {/* <div className="arrow-right">
          <span class="material-symbols-outlined">chevron_right</span>
        </div>
        <div className="arrow-left">
          <span class="material-symbols-outlined">chevron_left</span>
        </div> */}
        <Slider ref={sliderRef} {...settings}>
          {PROJECTS.map((item) => (
            <Projectcard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Project;

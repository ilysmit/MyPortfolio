import React, { useRef } from "react";
import "./Workexperience.css";
import { WORK_EXPERIENCE } from "../../utils/data";
import Experiencecard from "./ExperienceCard/Experiencecard";
import Slider from "react-slick";
const Workexperience = () => {
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
      <h5>Work Experience</h5>

      <div className="experience-content">
        {/* <div className="arrow-right">
          <span class="material-symbols-outlined">chevron_right</span>
        </div>
        <div className="arrow-left">
          <span class="material-symbols-outlined">chevron_left</span>
        </div> */}
        <Slider ref={sliderRef} {...settings}>
          {WORK_EXPERIENCE.map((item) => (
            <Experiencecard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Workexperience;

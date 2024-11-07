import React, { useState } from "react";
import "./skill.css";
import { SKILLS } from "../../utils/data";
import SkillCard from "./SkillCard/SkillCard";
import SkillInfoCard from "./SkillInfoCard/SkillInfoCard";

function Skill() {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelactSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section  id="skill" className="skills-container">
      <h5>Technical Proficiency</h5>

      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => (
            <SkillCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title===item.title}
              onClick={()=>{
                handleSelactSkill(item);
              }}
            />
          ))}
        </div>

        <div className="skills-info">
          <SkillInfoCard
          heading={selectedSkill.title}
          skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
}

export default Skill;

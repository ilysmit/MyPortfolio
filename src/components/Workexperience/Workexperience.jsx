import React from 'react'
import "./Workexperience.css"
import { WORK_EXPERIENCE } from '../../utils/data'
import Experiencecard from './ExperienceCard/Experiencecard'

const Workexperience = () => {
  return (
    <section className='experience-container'>
        <h5>Work Experience</h5>

        <div className='experience-content'>
            {WORK_EXPERIENCE.map((item)=>(
                <Experiencecard key={item.title} details={item}/>
            ))}
        </div>
    </section>
  )
}

export default Workexperience
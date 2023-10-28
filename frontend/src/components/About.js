import React from 'react';
import { Element } from 'react-scroll'
import '../css/about.css'
import { skillsData } from './data'
import profile from '../images/logos/profile-img.jpg'

function About () {
    return (
        <Element id='about-section' name='about-section'>
            <div className='about-bio'>
                <div className='about-img'>
                    <img alt='profile picture' src={profile}/>
                </div>
                <div className='about-bio-text'>
                    <h2>
                        I am a web developer with a passion for coding well-crafted, accessible, and responsive, user experiences.
                    </h2>
                    <p>
                        I graduated from DePaul University in Chicago where I honed my creative eye for detail with a degree in Digital Media & Communications. After years of working in Digital Media and Film, I went back to school and learned how to combine my creative skills with computer science and bring ideas alive in websites and apps using code. 
                    </p>
                </div>
            </div>,

            
            <div className='about-skills'>
                <h3>Skilled with:</h3>
                {skillsData.map((skill, index) => {
                    return (
                        <div key={index} className='about-div'>
                            <div className='about-skill-logo'>
                                <img src={skill.icon} alt={skill.name} />
                            </div>
                            <div className='about-skill-name'>
                                <p>{skill.name}</p>
                            </div> 
                        </div>
                    )
                })}
            </div>
        </Element>
    )
}

export default About;
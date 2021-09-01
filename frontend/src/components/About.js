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
                    <img alt='profile pic' src={profile}/>
                </div>
                <div className='about-bio-text'>
                    <h2>
                        I am a full-stack web developer with a passion for coding well-crafted, easy to use websites and apps.
                    </h2>
                    <p>
                        Hello, welcome to my portfolio. I help people make dreams a reality with clean and easy to use UI that runs at blisteringly speeds.
                        <br/>
                        I graduated from DePaul University in Chicago where I honed an creative eye for detail with a degree in Digital Media/Communications. At Lambda School I learned the skills to turn those ideas into reality with code. 
                    </p>
                </div>
            </div>

            
            <div className='about-skills'>
                <h3>I have experience with:</h3>
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
import React from 'react';
import { Element } from 'react-scroll'
import '../css/about.css'
import { skillsData } from './data'
import profile from '../images/logos/profile-img.jpg'

function About () {
    return (
        <div>
            <Element id='about-section' name='about-section'>
                <div className='about-bio'>
                    <div className='about-img'>
                        <img alt='profile pic' src={profile}/>
                    </div>
                    <div className='about-bio-text'>
                        <h2>
                            I am a full-stack web developer with a passion for coding well-crafted easy to use websites and apps.
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
        </div>
    )
}

export default About;
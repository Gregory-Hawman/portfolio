import React from 'react';
import { Element } from 'react-scroll'
import '../css/exp.css'

import javascriptIcon from '../images/javascript.svg'
import reactIcon from '../images/react.svg'
import reduxIcon from '../images/redux.svg'
import html5Icon from '../images/html5icon.svg'
import cssIcon from '../images/css3.svg'
import pythonIcon from '../images/python.svg'
import nodejsIcon from '../images/Node.js_logo.svg'

function Experience () {
    const skills = [
        { name: 'JavaScript', icon: javascriptIcon },
        { name: 'React', icon: reactIcon },
        { name: 'Redux', icon: reduxIcon },
        { name: 'Node.js', icon: nodejsIcon },
        { name: 'Python', icon: pythonIcon },
        { name: 'HTML5', icon: html5Icon },
        { name: 'CSS3', icon: cssIcon },
    ]

    return (
        <div>
            <Element id='exp-section' name='exp-section'>
                <h1>I have experience with:</h1>
                <div className='exp-container'>
                    {skills.map((skill, index) => {
                        return (
                            <div key={index} className='exp-div'>
                                <div className='exp-logo'>
                                    <img src={skill.icon} alt={skill.name} />
                                </div>
                                <div className='exp-content'>
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

export default Experience;
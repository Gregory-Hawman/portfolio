import React from 'react';
import { Element } from 'react-scroll'
import Projects from './Work'
import '../css/work.css'

import bgImg from '../images/projects/bridgegood.jpg'
import golImg from '../images/projects/gameOfLifeImg.png'
import bblsImg from '../images/projects/bubblesImg.png'

const ProjectsData = [
    {
        name: 'BRIDGEGOOD',
        tech: 'React | Redux | Node.js', 
        desc: 'A place I worked once!',
        img: bgImg,
        link: 'https://www.bridgegood.dev/'
    },
    {
        name: 'Game of Life',
        tech: 'JavaScript | React',
        desc: 'A place I worked once!',
        img: golImg,
        link: 'https://www.bridgegood.dev/'
    },
    {
        name: 'Bubbles', 
        tech: 'React | Redux ',
        desc: 'A place I worked once!',
        img: bblsImg,
        link: 'https://www.bridgegood.dev/'
    },
    {
        name: 'Sleep Tracker',
        tech: 'React | Redux | Node.js', 
        desc: 'A place I worked once!',
        img: '',
        link: 'https://www.bridgegood.dev/'
    },
    {
        name: 'Family Recieps', 
        tech: 'React | Redux | Node.js',
        desc: 'A place I worked once!',
        img: '',
        link: 'https://www.bridgegood.dev/'
    },
    {
        name: 'MedCabinet', 
        tech: 'React | Redux | Node.js',
        desc: 'A place I worked once!',
        img: '',
        link: 'https://www.bridgegood.dev/'
    },
    // {
    //     name: 'Notes Notes Notes',
    //     tech: 'React | Node.js',
    //     desc: 'A place I worked once!',
    //     img: '',
    //     link: 'https://www.bridgegood.dev/'
    // },
    // {
    //     name: '30 Day Challenge',
    //     tech: 'React | Node.js', 
    //     desc: 'A place I worked once!',
    //     img: '',
    //     link: 'https://www.bridgegood.dev/'
    // },
]

function ProjectsList () {
    return (
        <Element id='work-section' name='work-section'>
            <h2>Work</h2>
            <div className='work-container'>
                {ProjectsData.map((project, index) => {
                    return (
                        <Projects 
                            key={index}
                            name={project.name}
                            tech={project.tech}
                            desc={project.desc}
                            img={project.img}
                            link={project.link}
                        />
                    )
                })}
            </div>
        </Element>
    )
}

export default ProjectsList
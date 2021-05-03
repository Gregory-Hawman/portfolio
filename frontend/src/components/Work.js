import React from 'react';
import { Element } from 'react-scroll'
import '../css/work.css'
import bgImg from '../images/bridgegood.jpg'

function Work () {

    const Projects = [
        {
            name: 'BRIDGEGOOD',
            tech: 'React | Redux | Node.js', 
            desc: 'A place I worked once!',
            img: bgImg,
            link: 'https://www.bridgegood.dev/'
        },
        {
            name: 'Game of Life', 
            desc: 'A place I worked once!'},
        {
            name: 'Notes Notes Notes', 
            desc: 'A place I worked once!'},
        {
            name: '30 Day Challenge', 
            desc: 'A place I worked once!'},
        // {
        //     name: 'Bubbles', 
        //     desc: 'A place I worked once!'},
        // {
        //     name: 'Project 6', 
        //     desc: 'A place I worked once!'},
        // {
        //     name: 'Project 7', 
        //     desc: 'A place I worked once!'},
        // {
        //     name: 'Project 8', 
        //     desc: 'A place I worked once!'},
    ]

    return (
        <div>
            <Element id='work-section' name='work-section'>
                <div>
                    <h1>Work</h1>
                    <div className='work-container'>
                        {Projects.map((project, index) => {
                            return (
                                <div key={index} className='works'>
                                    <img src={project.img}/>
                                    <div >
                                        {project.name}
                                    </div>
                                    <div className='work-desc'>
                                        {project.desc}
                                    </div>
                                    <div>
                                        More
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Element>

        </div>
        
        
    )
}

export default Work;
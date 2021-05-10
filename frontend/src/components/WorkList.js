import React from 'react';
import { Element } from 'react-scroll'
import Projects from './Work'
import '../css/work.css'
import { projectData } from './data'

function ProjectsList () {
    return (
        <Element id='work-section' name='work-section'>
            <h2>Portfolio </h2>
            <div className='work-container'>
                {projectData.map((project, index) => {
                    return (
                        <Projects 
                            key={index}
                            detail={project.detail}
                            img={project.img}
                            link={project.link}
                            modalImg={project.modalImg}
                            name={project.name}
                            tag={project.tag}
                            tech={project.tech}
                        />
                    )
                })}
            </div>
        </Element>
    )
}

export default ProjectsList;
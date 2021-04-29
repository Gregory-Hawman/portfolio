import React from 'react';
import { Element } from 'react-scroll'
import '../css/work.css'

function Work () {

    const Projects = [
        {name: 'Project 1', desc: 'A place I worked once!'},
        {name: 'Project 2', desc: 'A place I worked once!'},
        {name: 'Project 3', desc: 'A place I worked once!'},
        {name: 'Project 4', desc: 'A place I worked once!'},
        {name: 'Project 5', desc: 'A place I worked once!'},
        {name: 'Project 6', desc: 'A place I worked once!'},
        {name: 'Project 7', desc: 'A place I worked once!'},
        {name: 'Project 8', desc: 'A place I worked once!'},
    
    ]

    return (
        <div>
            <Element id='work-section' name='work-section'>
                <div>
                    <h1>Work</h1>
                    <div className='work-container'>
                        {Projects.map((project, index) => {
                            return (
                                <div key={index} className='works'>{project.name}</div>
                            )
                        })}
                    </div>
                </div>
            </Element>

        </div>
        
        
    )
}

export default Work;
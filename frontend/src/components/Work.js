import React from 'react';
import { Element } from 'react-scroll'

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
                    <h1>Work Experience</h1>
                    <div>
                        {Projects.map((project) => {
                            return (
                                <div>{project.name}</div>
                            )
                        })}
                    </div>
                </div>
            </Element>

        </div>
        
        
    )
}

export default Work;
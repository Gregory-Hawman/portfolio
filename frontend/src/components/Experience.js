import React from 'react';
import { Element } from 'react-scroll'

function Experience () {
    const skills = [
        {name: 'JavaScript'},
        {name: 'React'},
        {name: 'Redux'},
        {name: 'Node.js'},
        {name: 'Python'},
        {name: 'HTML5'},
        {name: 'CSS3'},
    ]

    return (
        <div>
            <Element id='exp-section' name='exp-section'>
                <h1>I have experience with:</h1>
                <div>
                    {skills.map((skill) => {
                        return (
                            <div>
                                <p>{skill.name}</p>
                            </div>
                        )
                    })}
                </div>
            </Element>
        </div>
    )
}

export default Experience;
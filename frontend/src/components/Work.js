import React, { useState } from 'react';
import '../css/work.css'


function Projects (props) {
    const [hover, setHover] = useState()

    const onHover = () => {
        setHover(true);
    };

    const onLeave = () => {
        setHover(false);
    };

    return (
        <div className='works' onMouseEnter={onHover} onMouseLeave={onLeave}>
            <img src={props.img} alt={props.name}/>
            { hover ?
            <div className='work-hover'>
                <div className='work-name'>
                    {props.name}
                </div>
                <div className='work-tech'>
                    {props.tech}
                </div>
                <div className='work-button'>
                    More
                </div>
            </div> : null }
            
        </div> 
    )
}

export default Projects;
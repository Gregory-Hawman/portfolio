import React from 'react';
import '../css/workModal.css'

function WorkModal (props) {
    return (
        <div className='work-modal'>
            <img className='modal-img' src={props.modalImg} alt={props.name}/>
            <div className='modal-text'>
                <h1>{props.name}</h1>
                <h2>{props.tag}</h2>
                <div></div>
                <p>{props.detail}</p>
                <a href={props.link} target='_blank' rel='noreferrer'>
                    <button className='modal-button'>View Site</button>
                </a>
            </div>
        </div>
    )
}

export default WorkModal;
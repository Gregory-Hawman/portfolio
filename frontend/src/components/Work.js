import React, { useState, useRef } from 'react';
import '../css/work.css';
import Modal from './Modal';
import WorkModal from './WorkModal'


function Projects (props) {
    const [hover, setHover] = useState()

    const onHover = () => {
        setHover(true);
    };

    const onLeave = () => {
        setHover(false);
    };

    const modal = useRef(null)

    // const onClickMore = () => {
    //     for ( let i = 0; i < modalText.length; i++ ) {
    //         if (props.modalKey === modalText[i].modalKey) {
    //             console.log(modalText[i].name)
    //         }
    //     }
    // }

    // console.log(modalText)

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
                <div className='work-button' onClick={() => modal.current.open()}>
                    More
                </div>
            </div> : null }
            <Modal fade ref={modal}>
                <WorkModal 
                    key={props.index}
                    detail={props.detail}
                    img={props.img}
                    link={props.link}
                    modalImg={props.modalImg}
                    name={props.name}
                    tag={props.tag}
                    tech={props.tech}       
                />
            </Modal>
            
        </div> 
    )
}

export default Projects;
import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import Particles from 'react-particles-js';
import particlesConfig from '../config/particlesConfig';
import * as Scroll from 'react-scroll';

import '../css/intro.css';


function Intro () {
    const Link = Scroll.Link

    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
        const offset=window.scrollY;
        if(offset > 940 ){
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    let introClasses=['intro'];
        if(scrolled){
            introClasses.push('scrolled');
        }

    return (
        <Element id='intro-section' name='intro-section' className={introClasses.join(' ')} >
            <div className='particle-div'>
                <Particles params={particlesConfig} />
            </div>
            <div className='intro'>
                <div className='intro-content'>
                    <div>
                        <h1>Hello, I'm </h1>
                        <h2>Gregory Hawman</h2>
                    </div>
                    <p>I'm a Full-Stack Web Developer</p>
                    <div>
                        <Link
                        to="about-section"
                        spy={true}
                        smooth={true}
                        offset={-260}
                        duration={500}
                        className='intro-button'
                        >
                            View My Work
                        </Link>
                    </div>
                    
                </div>
            </div>
        </Element>
    )
}

export default Intro;
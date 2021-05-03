import React, { useState, useEffect } from 'react';
import * as Scroll from 'react-scroll';
import myLogo from '../images/Logo.png'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'

import '../css/navbar.css';

function Navbar () {
    const Link = Scroll.Link

    // ANIMATED INSTEAD OF FIXED NAVBAR SCROLL
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

    let navbarClasses=['navbar'];
        if(scrolled){
            navbarClasses.push('scrolled');
        }

    return (
        <div className={navbarClasses.join(' ')}>
            <div className='nav img logo'>
                {/* <img src={myLogo} alt='my-logo' />    */}
            </div>
            
            <div className='nav links'>
                <div>
                    <Link
                    to="intro-section"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className='intro-section'
                    activeClass='active-intro'
                    >
                    Home
                    </Link>
                </div>
                <div>
                    <Link
                    to="about-section"
                    spy={true}
                    smooth={true}
                    offset={-250}
                    duration={500}
                    className='about-section'
                    activeClass='active-about'
                    >
                        About
                    </Link>
                </div>
                <div>
                    <Link
                    to="work-section"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                    className='work-section'
                    activeClass='active-work'
                    >
                        Work
                    </Link>
                </div>
                <div>
                    <Link
                    to="test-section"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                    className='test-section'
                    activeClass='active-test'
                    >
                        Testimonials
                    </Link>
                </div>
                <div>
                    <Link
                    to="contact-section"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                    className='contact-section'
                    activeClass='active-contact'
                    >
                        Contact
                    </Link>
                </div>
            </div>

            <div className='social-links'>
                <a href='https://github.com/Gregory-Hawman' target='_blank' rel='noreferrer'>
                    <img src={github} alt='Github Link'/>
                </a>
                <a href='https://www.linkedin.com/in/gregory-hawman/' target='_blank' rel='noreferrer'>
                    <img src={linkedin} alt='LinkedIn Link' />
                </a>
            </div>
        </div>
    )
}

export default Navbar;
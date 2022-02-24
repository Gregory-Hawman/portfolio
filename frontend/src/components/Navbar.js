import React, { useState, useEffect } from 'react';
import * as Scroll from 'react-scroll';
// import myLogo from '../images/Logo.png'
import github from '../images/logos/github.svg'
import linkedin from '../images/logos/linkedin.svg'
import useWindowDimensions from '../hooks/useWindowDemensions';

import '../css/navbar.css';

function Navbar () {
    const Link = Scroll.Link
    const { height } = useWindowDimensions();

    // ANIMATED INSTEAD OF FIXED NAVBAR SCROLL
    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
        const offset=window.scrollY;
        if(offset > height){
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    return (
        <> 
            <div className='navbar'>
                <div className='nav-links'>
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
                        offset={-125}
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
                        offset={-50}
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
                        offset={-125}
                        duration={500}
                        className='test-section'
                        activeClass='active-test'
                        >
                            Testimonials
                        </Link>
                    </div>
                    <div>
                        <Link
                        to="footer-section"
                        spy={true}
                        smooth={true}
                        offset={-100}
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

            {scrolled ? 
                <div className='scrolled'>
                    <div className='nav-links'>
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
                            offset={-125}
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
                            offset={-50}
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
                            offset={-125}
                            duration={500}
                            className='test-section'
                            activeClass='active-test'
                            >
                                Testimonials
                            </Link>
                        </div>
                        <div>
                            <Link
                            to="footer-section"
                            spy={true}
                            smooth={true}
                            offset={0}
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
            :
                null
            }
        </>
    )
}

export default Navbar;
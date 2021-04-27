import React from 'react';
import * as Scroll from 'react-scroll';
import myLogo from '../images/Logo.png'
// import { Link } from 'react-router-dom';

function Navbar () {
    const Link = Scroll.Link

    return (
        <div className='navbar'>
            <div className='nav img'>
                <img scr={myLogo} alt='my-logo'/>   
            </div>
            
            <div className='nav links'>
                <div>
                    <Link
                    to="bio-section"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className='bio-section'
                    activeClass='active-bio'
                    >
                    Bio
                    </Link>
                </div>
                <div>
                    <Link
                    to="exp-section"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className='exp-section'
                    activeClass='active-exp'
                    >
                        Experience
                    </Link>
                </div>
                <div>
                    <Link
                    to="work-section"
                    spy={true}
                    smooth={true}
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
                    duration={500}
                    className='contact-section'
                    activeClass='active-contact'
                    >
                        Contact
                    </Link>
                </div>
            </div>

            <div className='nav social-links'>
                <div>GitHub</div>
                <div>LinkedIn</div>
            </div>
        </div>
    )
}

export default Navbar;
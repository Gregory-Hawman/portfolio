import React from 'react';
import * as Scroll from 'react-scroll';
// import { Link } from 'react-router-dom';

function Navbar () {
    const Link = Scroll.Link

    return (
        <div>
            <div>Logo</div>
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
    )
}

export default Navbar;
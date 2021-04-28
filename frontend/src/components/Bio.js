import React from 'react';
import { Element } from 'react-scroll'
import '../css/bio.css'
import profile from '../images/profile-img.jpg'

function Bio () {

    return (
        <div>
            <Element id='bio-section' name='bio-section'>
                <div className='profile'>
                    <div className='profile-img'>
                        <img alt='profile image' src={profile}/>
                    </div>
                    <div className='profile-content'>
                        <h1>Hello, I am Gregory </h1>
                        <p>I am a full stack web developer with a passion for coding well crafted easy to use websites and apps.</p>
                    </div>
                </div>
            </Element>
        </div>
    )
}

export default Bio;
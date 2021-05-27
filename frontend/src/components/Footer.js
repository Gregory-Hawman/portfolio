import React from 'react';
import '../css/footer.css'
import { Element } from 'react-scroll'

function Footer () {

    return (
        <Element id='footer-section-success' name='footer-section'>
            <div className='footer'>
                <div> © {new Date().getFullYear()}, Built and Designed by Gregory Hawman</div>
            </div>
        </Element> 
    )
}

export default Footer;
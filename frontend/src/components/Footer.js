import React from 'react';
import { Element } from 'react-scroll'

function Footer () {

    return (
        <div>
            <Element>
                <div> © {new Date().getFullYear()}, Built and Designed by Gregory Hawman</div>
            </Element>
        </div>
    )
}

export default Footer;
import React from 'react';
import '../css/footer.css'

function Footer () {

    return (
        <div> 
            <div className='footer'>
                <div> © {new Date().getFullYear()}, Built and Designed by Gregory Hawman</div>
            </div>
        </div> 
    )
}

export default Footer;
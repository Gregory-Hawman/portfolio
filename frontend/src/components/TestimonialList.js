import React from 'react';
import { Element } from 'react-scroll'
import Testimonials from './Testimonials'
import '../css/testimonials.css'
import { testData } from './data'

function TestimonialsList () {
    return (
        <Element id='test-section' name='test-section'>
            <h2>Testimonials</h2>
            <div className='tests'>
                {testData.map((test, index) => {
                    return (
                        <Testimonials 
                            key={index}
                            name={test.name}
                            img={test.img}
                            text={test.text}
                        />
                    )
                })}
            </div>
        </Element>
    )
}

export default TestimonialsList;
import React from 'react';
import ReactTextCollapse from 'react-text-collapse'
import '../css/testimonials.css'

function Testimonials (props) {

    const TEXT_COLLAPSE_OPTIONS = {
        collapse: false, // default state when component rendered
        collapseText: '... show more', // text to show when collapsed
        expandText: 'show less', // text to show when expanded
        minHeight: 215, // component height when closed
        maxHeight: 500, // expanded to
        textStyle: { // pass the css for the collapseText and expandText here
          color: "white",
          fontSize: "15px"
        }
      }

    return (
        <div  key={props.index} className='test-card'>
            <div className='test-img'> <img src={props.img} alt={props.name} /> </div>
            <div className='test-text'>
                <div> <h3>{props.name}</h3> </div>
                <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}><p> {props.text} </p></ReactTextCollapse>
            </div>    
        </div>
    ) 
}

export default Testimonials;
import React from 'react';
import { Element } from 'react-scroll'
import ReactTextCollapse from 'react-text-collapse'
import '../css/testimonials.css'

import iraPic from '../images/ira-pic.jpg'
import justinPic from '../images/justin-pic.jpg'
import alexPic from '../images/alex-pic.jpg'

function Testimonials () {

    const TEXT_COLLAPSE_OPTIONS = {
        collapse: false, // default state when component rendered
        collapseText: '... show more', // text to show when collapsed
        expandText: 'show less', // text to show when expanded
        minHeight: 200, // component height when closed
        maxHeight: 500, // expanded to
        textStyle: { // pass the css for the collapseText and expandText here
          color: "blue",
          fontSize: "15px"
        }
      }

    const tests = [
        {
            name: 'Ira Sanchez', 
            img: iraPic, 
            text: 'I mentored Gregory for 4 months has he moved through the technical curriculum at Lambda School. He consistently put out high quality work that not only functions well but looks good too. Gregory works well on a team and can take on leadership positions if need be. He can also work alone and does not need others to stay disciplined and on track. Anyone seeking a skilled front-end engineer with an eye for design can confidently hire Gregory'
        },
        {
            name: 'Justin Russell',
            img: justinPic,
            text: `Gregory Hawman is amazing to work with, and has great experience in HTML, CSS, JavaScript, React, Redux, Node, SQL, Knex, ReST API's, and Github. He is a broadminded Lambda Student and his exceptional work flow, skills, imagination and understanding of change requests made collaborating on projects a dream. Gregory assumed a leadership role in Lambda School, inspiring and motivating his colleagues. Studying at Lambda School is most challenging, and he battled the impediments. I could always depend on him to set the best example as a student at Lambda School. I've constantly felt Gregory Hawman was one of the most effective team mates I have ever had the privilege of working with.`
        },
        {
            name: 'Alex Martinez',
            img: alexPic,
            text: `Gregory isn't just a great student but also an inspiring person. His exceptional work flow, skills and comprehension of change requests made working with him a dream. Gregory is organized and has no problem to work hard when necessary. His leadership and organizational skills have been invaluable to the group. Gregory makes the impossible possible. He is a great person to work with and is a great addition to any organization.`
        },
    ]

    return (
        <div>
            <Element id='test-section' name='test-section'>
                <h2>Testimonials</h2>
                <div className='tests'>
                    {tests.map((test, index) => {
                        return (
                            <div  key={index} className='test-card'>
                                <div className='test-img'> <img src={tests[index].img} alt={test.name} /> </div>
                                <div className='test-text'>
                                    <div> {test.name} </div>
                                    <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}><p> {test.text} </p></ReactTextCollapse>
                                </div>    
                            </div>
                        )
                    })}
                </div>
            </Element>
        </div>
    ) 
}

export default Testimonials;
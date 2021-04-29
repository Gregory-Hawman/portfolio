import React from 'react';
import { useForm, ValidationError } from '@formspree/react'
import { Element } from 'react-scroll'
import '../css/contact.css'

function Contact () {
    const [state, handleSubmit] = useForm('mjvjgbqe');
        if (state.succeeded){
            return <p>Thank you for getting in contact!</p>;
        }

    return (
        <div>
            <Element id='contact-section' name='contact-section'>
                <div className='contact-form'>
                    <h2>Contact Me</h2>
                    <form
                        onSubmit={handleSubmit}
                        action='https://formspree.io/f/mjvjgbqe'
                        method='POST'
                    >
                        <div className='form'>
                            <div className='formName'>
                                <label>Name: </label>
                                <input id='name' type='name' name='name'/>
                                <ValidationError prefix='Name' field='name' errors={state.errors}/>
                            </div>
                        
                            <div className='formEmail'>
                                <label htmlFor='email'>Email Address: </label>
                                <input id='email' type='email' name='email'/>
                                <ValidationError prefix='Email' field='email' errors={state.errors}/>
                            </div>

                            <div className='formMessage'>
                                <label>Message: </label>
                                <textarea id='message' name='message'/>
                                <ValidationError prefix='Message' field='message' errors={state.errors}/>
                            </div>
                        </div>
     
                        <button type='submit' disabled={state.submitting}>Send</button>
                    </form>
                    
                </div>
            </Element>
        </div>
    )
}

export default Contact;
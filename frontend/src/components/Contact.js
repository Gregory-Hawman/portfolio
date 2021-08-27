import React from 'react';
import { useForm, ValidationError } from '@formspree/react'
import { Element } from 'react-scroll'
import '../css/contact.css'

function Contact () {
    const [state, handleSubmit] = useForm('mjvjgbqe');
        if (state.succeeded){
            return (
                <Element id='contact-section-success' name='contact-section'>
                    <div className='contact-form'>
                        <h2>Contact Me</h2>
                        <form
                            onSubmit={handleSubmit}
                            action='https://formspree.io/f/mjvjgbqe'
                            method='POST'
                        >
                            <div className='form'>
                                <div className='formName'>
                                    <input id='name' type='name' name='name' placeholder='Your Name'/>
                                    <ValidationError prefix='Name' field='name' errors={state.errors}/>
                                </div>
                            
                                <div className='formEmail'>
                                    <input id='email' type='email' name='email' placeholder='Email Address'/>
                                    <ValidationError prefix='Email' field='email' errors={state.errors}/>
                                </div>

                                <div className='formMessage'>
                                    <textarea id='message' name='message' placeholder='Leave a message!'/>
                                    <ValidationError prefix='Message' field='message' errors={state.errors}/>
                                </div>

                                <button className='contact-button' type='submit' disabled={state.submitting}>Send</button>
                            </div> 
                        </form>

                        <p className='contact-success'>Thank you for getting in contact!</p>
                    </div>
                </Element>
            );
        }

    return (
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
                            <input id='name' type='name' name='name' placeholder='Your Name'/>
                            <ValidationError prefix='Name' field='name' errors={state.errors}/>
                        </div>
                    
                        <div className='formEmail'>
                            <input id='email' type='email' name='email' placeholder='Email Address'/>
                            <ValidationError prefix='Email' field='email' errors={state.errors}/>
                        </div>

                        <div className='formMessage'>
                            <textarea id='message' name='message' placeholder='Leave a message!'/>
                            <ValidationError prefix='Message' field='message' errors={state.errors}/>
                        </div>

                        <button className='contact-button' type='submit' disabled={state.submitting}>Send</button>
                    </div>
                </form>
                
            </div>
        </Element>
    )
}

export default Contact;
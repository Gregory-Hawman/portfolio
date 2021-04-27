import React from 'react';
import { Element } from 'react-scroll'

function Contact () {

    const submitForm = () => {

    }

    return (
        <div>
            <Element>
                <div>
                    <h2>Contact Me</h2>
                    <form
                        onSubmit={submitForm}
                        action='https://formspree.io/f/mjvjgbqe'
                        method='POST'
                    >
                        <label>Name: </label>
                        <input type='name' name='name'/>

                        <label>Email: </label>
                        <input type='email' name='email'/>

                        <label>Message: </label>
                        <input type='text' name='message'/>
                        <button>Send</button>
                    </form>
                    
                </div>
            </Element>
        </div>
    )
}

export default Contact;
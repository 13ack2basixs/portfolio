import './ContactForm.css'

import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [failMessage, setFailMessage] = useState("");

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_EMAILJS_USER_ID
            );
            setSuccessMessage("I have received your message! Please allow some time before I respond!");
    
        } catch (err) {
            setFailMessage("I am sorry! I couldn't receive your message, you might want to email me directly");
            console.log(err.text);
        } finally {
            setIsSubmitting(false);
        }
    }
    
    return (
        <div className='contact-form-container'>
            <form className='contact-form' onSubmit={sendEmail}>
                <label className='label-name'>Name</label>
                <input className='input-name' name='name' />
                <label className='label-subject'>Subject</label>
                <input className='input-subject' name='subject' />
                <label className='label-email'>Email</label>
                <input className='input-email' type="email" name="email" />
                <label className='label-message'>Message</label>
                <textarea className='input-message'name="message" />
                <input className='submit-button' type="submit" value="Send" disabled={isSubmitting} />
                {successMessage && <p>{successMessage}</p>}
                {failMessage && <p>{failMessage}</p>}
            </form>
        </div>
    )
};

export default ContactForm;
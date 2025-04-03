import './Contact.css';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className='contact-container'>
            <h2 id='contact'>Contact</h2>
            <p>Feel free to send me a message if you have a project idea that you think we could work together!</p>
            <ContactForm />
        </div>
    )
}

export default Contact;
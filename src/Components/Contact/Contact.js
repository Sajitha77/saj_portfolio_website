import React, { useState } from 'react';
import './contact.scss';

export default function Contact() {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to send the message to your email (you can use services like Nodemailer, SendGrid, etc.)
        alert("Your message has been sent! I'll get back to you soon."); // For now, it just shows an alert
    };

    return (
        <div className='contact' id='contact'>
            <div className="contactWrapper">
                <h1>Contact Me</h1>
                <p>I'm looking forward to hearing from you!</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Message" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

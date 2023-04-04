import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="number">PhoneNumber</label>
        <input type="number" id="number" name="number" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;

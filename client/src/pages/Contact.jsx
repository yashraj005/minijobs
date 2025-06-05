import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_rgf5bip', 'template_rjqp49q', formData, 'iq1NIdw0fVI8DAF9y')
      .then(() => {
        setSuccess(true);
        setError(false);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setError(true);
        setSuccess(false);
      });
  };

  return (
    <div className="contact-container">
  <h2>Contact Us</h2>
  <form onSubmit={handleSubmit}>
    <input 
      type="text" 
      name="name" 
      placeholder="Your Name" 
      value={formData.name} 
      onChange={handleChange} 
      required 
    />
    
    <input 
      type="email" 
      name="email" 
      placeholder="Your Email" 
      value={formData.email} 
      onChange={handleChange} 
      required 
    />
    
    <textarea 
      name="message" 
      placeholder="Your Message" 
      value={formData.message} 
      onChange={handleChange} 
      required
    ></textarea>
    
    <button type="submit">Send Message</button>
  </form>

  {success && <p className="success-message">Message sent successfully!</p>}
  {error && <p className="error-message">Failed to send message. Try again.</p>}
</div>

  );
};

export default Contact;

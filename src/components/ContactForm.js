import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/contactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: '',  // Sender's name
    to_name: 'Anthony Barbaro',  // Receiver's name (or company name)
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS send function using environment variables
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormStatus('Message sent successfully!');
        setFormData({
          from_name: '',
          to_name: 'Anthony Barbaro', // Reset to the default recipient name
          email: '',
          message: '',
        });
      }, (error) => {
        console.log('FAILED...', error);
        setFormStatus('Message failed to send. Please try again.');
      });
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="from_name">Name</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            value={formData.from_name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Send</button>
      </form>

      {formStatus && <p className="form-status">{formStatus}</p>}
    </div>
  );
}

export default ContactForm;

import React, { useState } from "react";
// import React from "react";
import "./Contact.css";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const [isMessageSent, setIsMessageSent] = useState(false);
    
      // Handle form input changes
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form behavior
    
        // Simulate message sent
        setIsMessageSent(true);
    
        // Clear the form fields
        setFormData({
          name: "",
          email: "",
          message: "",
        });
    
        // Hide the confirmation message after 3 seconds
        setTimeout(() => {
          setIsMessageSent(false);
        }, 3000);
      };
    

  return (
    <div className="contact-container" id="contact">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: <a href="mailto:vaishanvipawar860@gmail.com">vaishanvipawar860@gmail.com</a></p>
        <p>Phone: <a href="tel:7002628810">+91 7002628810</a></p>
        {/* <div className="social-links">
          <a href="https://facebook.com/jasscook" target="_blank" rel="noopener noreferrer">Jasscook</a>
          <a href="https://pinterest.com/jasscook" target="_blank" rel="noopener noreferrer">Jasscook</a>
        </div> */}
        
      </div>
      <div className="contact-form" >
        <h2>I’d love to hear from you</h2>
        <p>Leave a message below, and I’ll get back to you as soon as possible.</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required />
            <span className="line"></span>
          </div>
          <div className="input-group">
            <input type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required />
            <span className="line"></span>
          </div>
          <div className="input-group">
            <textarea name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required></textarea>
            <span className="line"></span>
          </div>
          <button type="submit" >Send Message</button>
        </form>
        {isMessageSent && (
          <p className="message-sent">Thank you! Your message has been sent.</p>
        )}
      </div>
    </div>
  );
};

export default ContactPage;

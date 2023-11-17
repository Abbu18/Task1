import '../styles/ContactFormStyles.css';
import React, { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    companyname: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleName = (e) => {
    setFormData({
      ...formData,
      name: e.target.value,
    });
  };

  const handleCompanyname = (e) => {
    setFormData({
      ...formData,
      companyname: e.target.value,
    });
  };

  const handleEmail = (e) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
  };

  const handlePhone = (e) => {
    setFormData({
      ...formData,
      phone: e.target.value,
    });
  };

  const handleMessage = (e) => {
    setFormData({
      ...formData,
      message: e.target.value,
    });
  };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        await axios.post('http://localhost:3001/send-email', formData, { timeout: 5000 }); // Adjust the timeout value as needed
        alert('Message sent successfully');
        // Additional logic or state updates
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Error sending message. Please try again.');
      }
    };

    return (
        <div className='contact-page'>
        <div className='title'>
            <h1>CONTACT US</h1>
            </div>
            <div className='contact'>
            <div className="form-container">
                <h1 className='form-title
                '>Send a Message</h1>
                <form id="contact-form" method="POST" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input 
                        id="name" 
                        name="name" 
                        placeholder="Full Name" 
                        type="text" 
                        value={formData.name} 
                        onChange={handleName}
                        required/>
                    </div>
                    <div className="form-group">
                        <input id="company name" 
                        name="company name" 
                        placeholder="Company Name" 
                        type="text" 
                        value={formData.companyname} 
                        onChange={handleCompanyname}
                        required/>
                    </div>
                    <div className="form-group">
                        <input id="email" 
                        name="email" 
                        placeholder="Email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleEmail}
                        required/>
                    </div>
                    <div className="form-group">
                        <input id="phone" 
                        name="phone" 
                        placeholder="Phone Number" 
                        type="text"
                        value={formData.phone} 
                        onChange={handlePhone}
                        required/>
                    </div>
                    <div className="form-group">
                        <textarea rows="6" 
                        name="message" 
                        placeholder="Enter Message"     
                        value={formData.message} 
                        onChange={handleMessage}
                        required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
           
            <p className='terms'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
            </div>
            </div>
            <div className="right-side">
                <h2>Take the Next Step</h2>
                <p>Ready to unlock the full potential of your government IT infrastructure? 
                    Reach out to our team of experts today to discuss your requirements, schedule a consultation, 
                    or request more information. We look forward to collaborating with you to drive meaningful change for your organization.</p>
                <h2>GovTech Professionals</h2>
                <p>Atlanta, GA</p>
            </div>
        </div>
    )
}


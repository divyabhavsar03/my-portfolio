import React, { useState } from 'react'
import './Contact.css'
import emailImg from '../../assets/projects_skills/email.png'
import linkedin from '../../assets/projects_skills/linkedin.png'

const Contact = () => {
    
    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "26f5ee44-c605-4a8d-90fb-a3d98f5f1ec4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message);
      event.target.reset();
    } else {
      console.log("Error", data);
    }
  };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Available to work on new projects. You can connect with me anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <a href="mailto:divya.bhavsar@ucalgary.ca" target="_blank" rel="noopener noreferrer"><img src={emailImg} alt="" /></a>
                    </div>
                    <div className="contact-detail">
                        <a href="https://www.linkedin.com/in/divya-bhavsar-bb264b24b/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a>
                    </div>
                </div>
            </div>

            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' required />
                <label htmlFor="">Your Email</label>
                <input type="text" placeholder='Enter your email' name='email' required />
                <label htmlFor="">Your message</label>
                <textarea name="message" rows="8" placeholder='Enter your message here' required></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
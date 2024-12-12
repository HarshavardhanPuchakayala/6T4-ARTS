import React, { useState,useRef } from 'react'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import emailjs from '@emailjs/browser';
import './Contact.css'
export default function Contact() {
    const forms = useRef();
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
  
    const validateForm = () => {
      const { name, email, message } = formData;
      if (!name || !email || !message) {
        toast.error("All fields are required!");
        return false;
      }
      return true;
    };
  
  
  
    const sendResponseEmail = () => {
      const responseParams = {
        to_name: formData.name,
        to_email: formData.email
      };
  
      emailjs.send('', '', responseParams, "")
        .then(() => {
          toast.success('A Response email  will be sent to your mail successfully!');
        }, (error) => {
          console.error( error.text);
        });
    };
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (!validateForm()) return;
  
  
     
      emailjs.sendForm('', '', forms.current, "")
        .then(() => {
        
         toast.success("Message sent successfully!");
          sendResponseEmail();
          
          
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        })
        .catch((error) => {
          toast.error("Failed to send message. Please try again.");
          console.error("Main email error:",  error.text || error);
        });
  };
  
  
  return (
    <section className="ContactSection" id='Contact'>
        <div className="ContactContent">
                <h2 className="sectionTitle">Get in touch</h2>
                <span className="sectionSubtitle">contact Me</span>
        </div>
        <div className="contactContainer">

          <div className='ContactConnet'>
                <h1 className="ContactHeading">Let's Connect</h1>
                <p className="ContactTest">If you need any artistic work, feel free to reach out! I'm here to bring your creative visions to life and deliver exceptional artwork.</p>
     
          </div>
           
            <div className="ContactContentForm">
                <form ref={forms} onSubmit={handleSubmit} className="ContactForm">

                <div className="ContactFormDiv">
                        <label htmlFor="" className="ContactFormTag">Name</label>
                        <input type="text" name='name'  className='ContactFormInput'
                          value={formData.name} placeholder='Enter your name' required 
                          onChange={handleChange}/>
                    </div>

                    <div className="ContactFormDiv">
                        <label htmlFor="" className="ContactFormTag">E-Mail</label>
                        <input type="email" 
                        name='email' 
                        className='ContactFormInput'
                        value={formData.email}
                         placeholder='Enter your email'
                          required 
                          onChange={handleChange}/>
                    </div>

                    <div className="ContactFormDiv">
                        <label htmlFor="" className="ContactFormTag">Message</label>
                        <textarea name='message' 
                        className='ContactFormInput' 
                        value={formData.message}
                         placeholder="Let's talk about..." required  
                         onChange={handleChange}
                         rows="4"></textarea> 
                    </div>
                    <button className='SubmitButton'  type='submit'>Send message</button>
                    <ToastContainer/>               
                </form>
            </div>
        </div>
    </section>
  )
}

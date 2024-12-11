import React, { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Contact.css'
export default function Contact() {
    const [user,setUser]=useState(
        {
            name:"",
            email:"",
            message:""
        }  
    )
    const Toast = ()=>{
        toast.success("Message Send Successfully..!!")
    }
    const FormData=(e)=>{
        const {name,value}=e.target;
        setUser({...user,[name]: value});
    }
const FirebaseExport =async (e)=>{
    e.preventDefault();
    const {name,email,message}=user;
    const res = await fetch("https://portfolio-b4797-default-rtdb.asia-southeast1.firebasedatabase.app/userData.json",{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            name,
            email,
            message,
        }),
    })
    setUser({
        name:"",
        email:"",
        message:""
    })
    Toast()
}
  
  return (
    <section className="ContactSection" id='Contact'>
        <div className="ContactContent">
                <h2 className="sectionTitle">Get in touch</h2>
                <span className="sectionSubtitle">contact Me</span>
        </div>
        <div className="contactContainer">

          <div className='ContactConnet'>
                <h1 className="ContactHeading">Let's Connect</h1>
                <p className="ContactTest">I'm currently seeking new opportunities, and my inbox is always open! Whether you have a question or just want to say hello, I'll do my best to get back to you promptly.</p>
                <div className="ContactIcons">
                    <a href="https://www.linkedin.com/in/harshavardhan-puchakayala/" target='_blank'>
                    <ion-icon name="logo-linkedin"></ion-icon>
                    </a>

                    <a href="https://github.com/HarshavardhanPuchakayala"  target='_blank'>
                    <ion-icon name="logo-github"></ion-icon>
                    </a>
                </div>
          </div>
           
            <div className="ContactContentForm">
                <form action="" className="ContactForm">

                <div className="ContactFormDiv">
                        <label htmlFor="" className="ContactFormTag">Name</label>
                        <input type="text" name='name'  className='ContactFormInput' value={user.name} placeholder='Enter your name' required onChange={FormData}/>
                    </div>

                    <div className="ContactFormDiv">
                        <label htmlFor="" className="ContactFormTag">E-Mail</label>
                        <input type="email" name='email' className='ContactFormInput'value={user.email} placeholder='Enter your email' required  onChange={FormData}/>
                    </div>

                    <div className="ContactFormDiv">
                        <label htmlFor="" className="ContactFormTag">Message</label>
                        <textarea name='message' className='ContactFormInput' value={user.message} placeholder="Let's talk about..." required  onChange={FormData}></textarea> 
                    </div>
                    <button className='SubmitButton'  type='submit' onClick={FirebaseExport}>Send message</button>
                    <ToastContainer/>               
                </form>
            </div>
        </div>
    </section>
  )
}

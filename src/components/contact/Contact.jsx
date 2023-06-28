import React, {useState} from 'react'
import './contact.css'
import {HiOutlineMailOpen} from 'react-icons/hi'
import {ImLinkedin} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion'

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n7vxb0o', 'template_qp2rend', form.current, 'okYMoTI1x1lJsOnus');
    setEmail("");
    setName("");
    setMessage("");
  };


  return (
    <motion.section id='contact'
    initial={{opacity: 0, y: 75}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.5,delay: 0.2}}
    viewport={{once:true}}
    >
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="links__container">
          <article className="link__container">
            <HiOutlineMailOpen/>
            <h3>Email</h3>
            <h5>harshagarwal.200310@gmail.com</h5>
            <a href="mailto:harshagarwal.200310@gmail.com" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
          <article className="link__container">
            <ImLinkedin/>
            <h3>Linkedin</h3>
            <h5>Harsh Agarwal</h5>
            <a href="https://www.linkedin.com/in/harsh-agarwal-a2249313b" target="_blank" rel="noreferrer">Let's Connect</a>
          </article>
        </div>


        <form ref= {form} onSubmit={sendEmail} id="formid">
          <input type="text" name= "name" placeholder="Your Name" onChange={event => setName(event.target.value)} value={name}/>
          {/* <input type="text" name= "name" placeholder="Your Name" onFocus={(e) => e.target.placeholder = ""} 
  onBlur={(e) => e.target.placeholder = "Your Name"}/> */}


          <input type="text" name='email' placeholder="Your Email" onChange={event => setEmail(event.target.value)} value={email}/>


          <textarea name="message" placeholder="Leave your message here..." onChange={event => setMessage(event.target.value)} value={message}></textarea>

  
          <div>
          <button className='btn btn-primary' type='submit' value='send' onClick={form.reset}><h3>Submit</h3></button>
          <button className='btn btn-primary' type='reset'><h3>Reset</h3></button>
          </div>
        </form>
      </div>
      
    </motion.section>
  )
}

export default Contact

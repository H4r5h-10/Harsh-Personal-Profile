import React from 'react'
import './contact.css'
import {HiOutlineMailOpen} from 'react-icons/hi'
import {AiOutlineInstagram} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n7vxb0o', 'template_qp2rend', form.current, 'okYMoTI1x1lJsOnus')
  };


  return (
    <section id='contact'>
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
            <AiOutlineInstagram/>
            <h3>Instagram</h3>
            <h5>@dummy</h5>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">DM me</a>
          </article>
        </div>
        <form ref= {form} onSubmit={sendEmail} id="formid">
          <input type="text" name= "name" placeholder='Your name'/>
          <input type="text" name='email' placeholder='Your email'/>
          <textarea name="message" placeholder='Leave Your Message here'></textarea>
          <div>
          <button className='btn btn-primary' type='submit' value='send'><h3>Submit</h3></button>
          <button className='btn btn-primary' type='reset'><h3>Reset</h3></button>
          </div>
        </form>
      </div>
      
    </section>
  )
}

export default Contact

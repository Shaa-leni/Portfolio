import React, { useRef } from 'react';
import './contact.css';
import {AiOutlineMail} from "react-icons/ai";
import {AiOutlineWhatsApp} from "react-icons/ai";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_awlss2l', 'template_il3ki3r', form.current, 'EVgmg8Bsu_xaXna93')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  const notify = () => toast("Wow so easy!");
  return (
    <section id="contact" className="contactsec">
       <h5>Get in Touch</h5>
       <h2>Let's TALK</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className="contact_option">
            <AiOutlineMail className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>shaaleni@gmail.com</h5>
            <a href="mqilto:shaalenikarthikeyan@gmail.com" target="_blank">Hit Me</a>
          </article>

          <article className="contact_option">
            <AiOutlineWhatsApp className='contact_option_icon'/>
            <h4>Whatsapp</h4>
            <h5>+0123456789</h5>
            {/* <a href="https://api.whatsapp.com/send?phone+919791972078">Hit Me</a> */}

            <a href="https://api.whatsapp.com" target="_blank" onClick={notify}>Hit Me</a>
            <ToastContainer />
          </article>

          {/* <article className="contact_option">
            <AiOutlineWhatsApp className='contact_option_icon'/>
            <h4>Whatsapp</h4>
            <h5>shaaleni@gmail.com</h5>
            <a href="https://api.whatsapp.com">Hit Me</a>
          </article> */}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text"name="name" placeholder='Your Full Name'required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message'  required/>
          <button type="submit" className='btn btn-primary'>Hit me</button>
        </form>
      </div>  
    </section>
  )
}

export default Contact;

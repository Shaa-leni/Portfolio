import React from 'react';
import "./about.css";
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";
import Resume from "../../images/Shaaleni.pdf";
import {IoMdDownload} from "react-icons/io"




const About = () => {
  return (
    <section id="about" className='aboutsec'>
    <h5>Get to Know</h5>
    <h2>About Me</h2>

    <div className="container about_container">

      <div className="about_me">
        <div className="about_me-image">
        <img src="me.jpg" alt="About Image"/>
        </div>
      </div>

      <div className="about_content">
        <div className="about_cards">
          <article className="about_card">
              <FaAward className="about_icon"/>
              <h5>Experience</h5>
              <small>1+ years working</small>
          </article>
          <article className="about_card">
              <FiUsers className="about_icon"/>
              <h5>Support</h5>
              <small>24/7</small>
          </article>
          <article className="about_card">
              <VscFolderLibrary className="about_icon"/>
              <h5>Projects</h5>
              <small>2+ completed</small>
          </article>
        </div>

        <p>Hello World! I am Shaaleni , a web developer specializing in MERN Stack . I enjoy creating interactive websites through React JS  and experimenting with new technology to serve the clients.
          {/* I am a MERN-Stack software engineer who loves exploring new technologies
           and often amazed by the progress we as a human species have mad so far in the
          recent years  */}
        </p>
        <a className='btn btn-primary' href={Resume} download="Shaaleni"> Resume <IoMdDownload/> </a>

      </div>

    </div>
    </section>
  )
}

export default About;

import React from 'react';
import {AiOutlineTwitter} from "react-icons/ai";
import { AiFillInstagram } from 'react-icons/ai';
import {SiMedium} from "react-icons/si";
import "./footer.css";



const Footer = () => {
  return (
    <footer>
        <a href="#" className="footer_logo">Shaalu</a>
        <ul className='permalinks'>
            <li> <a href="#">Home</a></li>
            <li> <a href="#about">About</a></li>
            <li> <a href="#skills">Skills</a></li>
            <li> <a href="#myworks">Projects</a></li>
            <li> <a href="#quotes">Quotes</a></li>
            <li> <a href="#contact">Contact</a></li>
        </ul>
        <div className='footer_socials'>
            <a href="httpa://instagram.com"><AiFillInstagram /></a>
            <a href="https://medium.com/@shaalenikarthikeyan" target="_blank"><SiMedium/></a>
            <a href="httpa://twitter.com"><AiOutlineTwitter/></a>
        </div>

        <div className='footer_copyright'>
            <small>&copy; Shaaleni K , No copy rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer;

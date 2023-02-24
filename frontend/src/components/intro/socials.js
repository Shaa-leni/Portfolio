import React from 'react'
import {AiOutlineWhatsApp,AiOutlineTwitter,AiOutlineLinkedin,AiOutlineGithub,AiOutlineInstagram} from "react-icons/ai"
import {SiMedium} from "react-icons/si";

const socials = () => {
  return (
    <div className='intro_socials'>
        <a href="https://linkedin.com/in/shaaleni-karthikeyan-18758917b" target="_blank"><AiOutlineLinkedin/></a>
        <a href="https://github.com/Shaa-leni" target="_blank"><AiOutlineGithub/></a>
        <a href="https://instagram.com/_nilishaa?igshid=NTE5MzUyOTU=" target="_blank"><AiOutlineInstagram/></a>
        {/* <a href="https://wa.me/qr/7MJBKIEEJRPBL1" target="_blank"><AiOutlineWhatsApp/></a> */}
        <a href="https://twitter.com" target="_blank"><AiOutlineTwitter/></a>
        <a href="https://medium.com/@shaalenikarthikeyan" target="_blank"><SiMedium/></a>
    </div>
  )
}

export default socials

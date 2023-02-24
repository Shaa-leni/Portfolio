import React from 'react'
import Resume from "../../images/Shaaleni.pdf";


const Buttons = () => {

  return (
    <div>
        <a  className='btn' href={Resume} download="Shaaleni"> Hit me</a>
        <a  className='btn' href="#contact">Let's Discuss</a>
    </div>
  )
}

export default Buttons;

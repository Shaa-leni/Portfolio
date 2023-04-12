import React from 'react';
import { useState } from 'react';
import "./nav.css";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {AiOutlineRead} from "react-icons/ai";
import {AiOutlineAppstoreAdd} from "react-icons/ai";
import {AiOutlineMessage} from "react-icons/ai";

const Nav = () => {
const [activeIcon , setActiveIcon]=useState("#");

  return (
    <nav>
    <a  href="#" onClick={()=>{setActiveIcon("#")}} className={activeIcon==="#"?"active":" "} >< AiOutlineHome/></a>  
    <a href="#about" onClick={()=>{setActiveIcon("#about")}} className={activeIcon==="#about"?"active":" "}><AiOutlineUser/></a>  
    <a href="#skills" onClick={()=>{setActiveIcon("#skills")}} className={activeIcon==="#skills"?"active":" "}><AiOutlineRead/></a>  
    <a href="#myworks" onClick={()=>{setActiveIcon("#myworks")}} className={activeIcon==="#myworks"?"active":" "}><AiOutlineAppstoreAdd/></a>  
    <a href="#contact" onClick={()=>{setActiveIcon("#contact")}} className={activeIcon==="#contact"?"active":" "}><AiOutlineMessage/></a>  
    </nav>
  )
}

export default Nav;

  
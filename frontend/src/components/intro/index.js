import React from 'react';
import './intro.css';
// import Buttons from "./buttons.js";
import Socials from "./socials.js";
import axios from "axios";
import { useState,useEffect } from 'react';
import image from "../../images/imagee.avif";
import BgSlider from './bgSlider';


const Intro = ({toggleTheme}) => {

// const [getter,setGetter] = useState([]);

//   useEffect(()=>{
//     axios.get("http://localhost:8000/myData").then((response)=>{
//       setGetter(response.data);
//     })
//   },[])

  return (
  <>
    <section id="#" className="container intro_container">
      <div className="mainItem">
      <p className="shaaleni" id="#"></p>
      <button onClick={()=>toggleTheme()} className="toggleBtn">Toggle Theme</button>
      </div>
      
    
    {/* <div className="img intro_img"> */}
       {/* {getter.map((data)=>{
      return(
        <>
        <img src={data.img}/>
        </>
      )
       
    })} */}
    {/* <img src={image}></img> */}
    {/* </div> */}
     
    {/* <div className="name_container">
        <h5 className='hello'>Hello I'm</h5>
        <h1>Shaaleni</h1>
        <h5>MERNStack Developer</h5>
      </div> */}
      {/* <Buttons/> */}
      <BgSlider/>

       <Socials/>
      <a  href="#about"><div className='scroll_sec'>
      <a  className="scroll_down"> Scroll to discover </a>
      <img src="downArrow.png"/>
      </div> 
      </a>
     
    </section>  
    </> 
  )
}

export default Intro;

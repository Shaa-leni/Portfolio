import React from 'react';
import './intro.css';
import Buttons from "./buttons.js";
import Socials from "./socials.js";
import axios from "axios";
import { useState,useEffect } from 'react';
import image from "../../images/imagee.avif" 


import Carousel from 'react-bootstrap/Carousel';


 
const Intro = () => {

const [getter,setGetter] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8000/myData").then((response)=>{
      setGetter(response.data);
    })
  },[])


  return (
  <>
 
        

    <section id="#" className="container intro_container">
    
    <div className="img intro_img">
       {/* {getter.map((data)=>{
      return(
        <>
        <img src={data.img}/>
        </>
      )
       
    })} */}
    <img src={image}></img>
    </div>
     
    <div className="name_container">
        <h5 className='hello'>Hello I'm</h5>
        <h1>Shaaleni</h1>
        <h5>MERNStack Developer</h5>
      </div>

      <Buttons/>
      <Socials/>
      <a href="#contact" className="scroll_down">Scroll down</a>
     
        {/* <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hi! <br />I'm Dhruv</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/15coSa2rnZcdywihM-pWTvoGqE65JAkxQAh6JDBNrF2Q/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I love building<br /> THINGS !!</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/dbarochiya" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I often <br/>Write ... </h1>
                          <p><a className="btn btn-primary btn-learn" href="https://dhruvbarochiya.me/" target="_blank" rel="noopener noreferrer">View Blog <i className="icon-book" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section> */}
     
    </section>
    </>
  )
}

export default Intro;

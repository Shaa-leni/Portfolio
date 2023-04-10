import React from 'react'
import './myworks.css';
import {FiGithub} from "react-icons/fi";
import {FaDesktop} from "react-icons/fa";


import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Myworks = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <section id="myworks" className='myworkssec'>
      <h5>My Recent Works</h5>
      <h2>Lets have a look into my project works</h2>
      <Slider className="container project_container"  {...settings}>

          < div className=" project_item">
            <div className='project_item-image'>
              <img className="'project_item-i"src="estore.png" alt=""/>
            </div>
            <h3>Static Layout Page EStore</h3>
            <div className='project_item-cta'>
            <a href="https://github.com" className="git_icon"  target="_blank"><FiGithub/></a>
            <a href="https://myecompage.000webhostapp.com/"  className="output_icon" target="_blank"><FaDesktop/></a>
            </div>
          </ div>

          < div className=" project_item">
            <div className='project_item-i'>
              <img className="'project_item-image" src="clickBuy.png" alt=""/>
            </div>
            <h3>E-Commerce webpage ClickBuy</h3>
            <div className='project_item-cta'>
            <a href="https://github.com" className="git_icon" target="_blank"><FiGithub/></a>
            <a href="https://github.com" className="output_icon" target="_blank"><FaDesktop/></a>
            </div>
          </ div>

          < div className=" project_item">
            <div className='project_item-i'>
              <img className="'project_item-image" src="picThree.jpg" alt=""/>
            </div>
            <h3>This is a project item title</h3>
            <div className='project_item-cta'>
            <a href="https://github.com" className="git_icon" target="_blank"><FiGithub/></a>
            <a href="https://github.com" className="output_icon"  target="_blank"><FaDesktop/></a>
            </div>
          </ div>

          < div className=" project_item">
            <div className='project_item-image'>
              <img src="picTwo.jpg" alt=""/>
            </div>
            <h3>This is a project item title</h3>
            <div className='project_item-cta'>
            <a href="https://github.com" className="git_icon" target="_blank"><FiGithub/></a>
            <a href="https://github.com" className="output_icon"  target="_blank"><FaDesktop/></a>
            </div>
          </ div>

          < div className=" project_item">
            <div className='project_item-image'>
              <img src="PicOne.jpg" alt=""/>
            </div>
            <h3>This is a project item title</h3>
            <div className='project_item-cta'>
            <a href="https://github.com" className="git_icon" target="_blank"><FiGithub/></a>
            <a href="https://github.com" className="output_icon"target="_blank"><FaDesktop/></a>
            </div>
          </ div>

             < div className=" project_item">
            <div className='project_item-image'>
              <img src="PicOne.jpg" alt=""/>
            </div>
            <h3>This is a project item title</h3>
            <div className='project_item-cta'>
            <a href="https://github.com"  className="git_icon" target="_blank"><FiGithub/></a>
            <a href="https://github.com"className="output_icon" target="_blank"><FaDesktop/></a>
            </div>
          </ div>

      </Slider>
    </section>
  )
}

export default Myworks;

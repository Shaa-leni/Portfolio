import React, { useEffect,useState } from 'react';
import './bgSlider.css';
import Buttons from './buttons';
import imageSlide from './data.js';


const BgSlider = () => {
  const[currentState,setCurrentState] = useState(0);

  useEffect(()=>{
    const Timer = setTimeout(()=>{
      if(currentState==2){
        setCurrentState(0)
      }
      else{
        setCurrentState(currentState+1)
      }
    },3000)
    return () => clearTimeout(Timer)
  },[currentState])

  const gotoNext = (currentState) => {
    setCurrentState(currentState)
  }

  const bgImageStyle = {
    backgroundImage:`url(${imageSlide[currentState].url})`,
    backgroundPosition:'center',
    backgroundSize:'cover',
    height:'25rem',
    width:"100%",
    top:"20%",
    position:"relative"
  }

  const btnclick ={
    border:"2px solid black",
    cursor:"pointer",
    backgroundColor:"white",
    color:"black",
    borderRadius:"5px",
  }
  
  return (
      <div className='slider-style'>
          {/* <div className='transparent-background'></div> */}
        <div className="leftContainer"> 
          <div style={bgImageStyle}>
                <div className='description'>
                    <div>
                      <h1>{imageSlide[currentState].title}</h1>
                      <a className="intro_nav_btn btn-primary btn" href={imageSlide[currentState].links} target="_blank" style={btnclick}>{imageSlide[currentState].body}</a>
                      <Buttons/>
                    </div>
                </div>
          </div>
                <div className='carousel-boult'>
                  {
                    imageSlide.map((imageSlide,currentState)=>{
                      return(<span  className="dots" key={currentState} onClick={()=>gotoNext(currentState)}></span>)   
                    })
                  }
                </div>
        </div>  
        <div className="rightContainer banner">
          <div className='blocks'>
          <img className="girlLap" src="girlSmile.png"/>
          </div>
        </div>     
      </div>  
  )
}

export default BgSlider;

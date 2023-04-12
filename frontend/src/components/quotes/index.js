import React from 'react'
import "./quotes.css";

import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data=[
  {
    id:1,
    avatar: "Elon.jfif",
    name: "Elon Musk",
    quote:"“If something is important enough, even if the odds are stacked against you, you should still do it.” —Elon Musk"
  },
  {
    id:2,
    avatar: "cory.jfif",
    name: "Cory House",
    quote:"“ Code is like humor. When you have to explain it, it's bad.”  - Cory House"  

    
  },
  {
    id:3,
    avatar: "edison.jfif",
    name: "Thomas Edison",
    quote:"“I have not failed. I've just found 10,000 ways that won't work.”   - Thomas Edison "
  }
]

const Quotes = () => {
  var settings = {
    // dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section id="quotes">
      <h5>Inspirational Quotes</h5>
      <h2>where can I go back and get motivated</h2>
      
       
  
      <Slider className="container quotes_container" {...settings}>
  
       {
        data.map(({avatar,name,quote},index)=>{
          return(
            <div className='quotes_item'>
            <div className='quote_avatar'>
              <img src={avatar} alt="avatar one"/>
            </div>
            <h5 className="sayer_name">{name}</h5>
            <small className="quote">
              {quote}
            </small>
            </div>
        )
        })
       }
       

      </Slider>
      
    </section>
  )
}

export default Quotes;

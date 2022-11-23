import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
import React from 'react'
  
const ImageSlider = ({images}) => {
  
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
  autoplaySpeed: 2000,
  width: 100,
   
  };
  return (
    <>
    
      <div className="imgslider" id='home'>
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <div >
                <div style={{background:"#00000045",zIndex:'-1'}}>
                <img src={item.src} style={{zIndex:'-5',position:'relative'}}/>
                </div>
              
           
              <h2 className="pictext" style={{zIndex:'1',position:'relative'}}>Godrej Woods| Super Luxurious and Ultra Spacoius 2/3/4/5 BHK.Starting Price @1.64 Crore*
                Limited Inventory Available | Get Best Offers
                
              </h2>
             
              <button className="neonbtn" style={{zIndex:'2',position:'relative'}}><h4 className="neon" style={{zIndex:'10',position:'relative',textAlign:'center'}}>Download the Brochure</h4></button>
              
              
              
             

              </div>
              
            </div>
            
          ))}
        </Slider>
      </div>
          </>
  )
}
export default ImageSlider;
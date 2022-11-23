import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import images from './images'

const Fade = ({images}) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };
  return (
    <div>
        <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                centerMode={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                showDots={false}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
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
        
  </Carousel>
    </div>
  )
}

export default Fade
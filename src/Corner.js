import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";




const Corner = () => {
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
<div>
  <div>2 BHK Apartment</div>
  <div>Carpet Area 612.25 - 777.47 sq.ft.</div>
  <div>₹ 1.56 - 2.08 Cr
+ Govt. Charges</div>
  
</div>
<div>
  <div>2 BHK Apartment</div>
  <div>Carpet Area 612.25 - 777.47 sq.ft.</div>
  <div>₹ 1.56 - 2.08 Cr
+ Govt. Charges</div>
  
</div>
<div>
  <div>2 BHK Apartment</div>
  <div>Carpet Area 612.25 - 777.47 sq.ft.</div>
  <div>₹ 1.56 - 2.08 Cr
+ Govt. Charges</div>
  
</div>
<div>
  <div>2 BHK Apartment</div>
  <div>Carpet Area 612.25 - 777.47 sq.ft.</div>
  <div>₹ 1.56 - 2.08 Cr
+ Govt. Charges</div>
  
</div>
<div>
  <div>2 BHK Apartment</div>
  <div>Carpet Area 612.25 - 777.47 sq.ft.</div>
  <div>₹ 1.56 - 2.08 Cr
+ Govt. Charges</div>
  
</div>

<div>
  <div>2 BHK Apartment</div>
  <div>Carpet Area 612.25 - 777.47 sq.ft.</div>
  <div>₹ 1.56 - 2.08 Cr
+ Govt. Charges</div>
  
</div>
<div>
  <div>2 BHK Apartment</div>
  <div>Carpet Area 612.25 - 777.47 sq.ft.</div>
  <div>₹ 1.56 - 2.08 Cr
+ Govt. Charges</div>
  
</div>
<div>
  <div>2 BHK Apartment</div>
  <div>Carpet Area 612.25 - 777.47 sq.ft.</div>
  <div>₹ 1.56 - 2.08 Cr
+ Govt. Charges</div>
  
</div>

            </Carousel>

        </div>
  )
}

export default Corner;
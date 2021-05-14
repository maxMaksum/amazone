import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from '../Hero/Hero';
import styled from 'styled-components'
import {mockData2} from '../MockData/MockData'

function NewSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        
      };

    return (
    
      
    <Slider {...settings} className=" image z-0 ">
    {mockData2.map((homedata)=>(
     <div className="image" id={homedata.id} >
       <Hero homedata={homedata} />
     </div>
     
     ))}
    </Slider>
  
      
    )
}

export default NewSlider

const Carousel = styled(Slider)`

z-index:-1000`

const Wrap = styled.div `
z-index:-1000
`
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowCircleRight, faArrowCircleLeft, faHome, faEnvelope, faUsers, faEllipsisV } from '@fortawesome/free-solid-svg-icons'




import {mockData2} from '../MockData/MockData'
import CardContentWelcome from '../Card/CardContentWelcome';

const PreviousBtn = (props)=>{
  const {className, onClick} =props
  return(
    <div className={className} onClick ={onClick} className="left-0">
      <div className="glass3 relative  flex items-center justify-center  -left-0 absolute z-10 h-8 top-1/2 p-2 w-10">
    <FontAwesomeIcon
              icon={faArrowCircleLeft}
              className=" left-0 absolute z-10 h-5 hover:animate-bounce  text-teal-500 text-xl"
    />
    </div>
  </div>
  )
 
}

const NextBtn = (props)=>{
  const {className, onClick, style} =props
  return(
    <div className={className} onClick ={onClick} className="" >
      <div className="glass3 relative  flex items-center justify-center  -right-0 absolute z-10 h-8 top-1/2 p-2 w-10">
    <FontAwesomeIcon
              icon={faArrowCircleRight}
              className="-right-0 absolute z-10  h-5 hover:animate-bounce text-teal-500 text-xl"
    />
    </div>
  </div>
  )
 
}

function Slider2() {
    const settings = {
        dots: true,
        infinite:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow:<PreviousBtn/>,
        nextArrow:<NextBtn/>,
        // autoplay:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
        
      };

    return (
    
      <div className=" z-0 mx-0" >

    <Slider {...settings} className="w-full">
    {mockData2.map((homedata)=>(
     <div id={homedata.id}  className="z-0 flex flex-col items-center justify-center"  style={{
      backgroundImage: `url("/linen3.jpg")`}} className="">
       <div className=" m-2">
       <MyImage url ={homedata.image}  className="w-100 z-0"/>
       <CardContentWelcome excerpt={homedata.excerpt}/>
       </div>
     </div>
     
     ))}
    </Slider>

    </div>
  
      
    )
}

export default Slider2


function MyImage({url}){
  return(
    <div  className="h-48 p-2">
        <img src={url} className="object-contain object-center w-full z-0"/>
    </div>
  )
}
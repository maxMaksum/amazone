import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {MockData2} from './MockData'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowCircleRight, faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons'


function Banner() {
    
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:false,
            prevArrow:<PreviousBtn/>,
            nextArrow:<NextBtn/>,
        }
       
    return (
        <div className="relative">
            <Slider {...settings} className="w-full z-10">

{MockData2.map((homedata) => (
  <div
    key={homedata.id}
    className=" relative mx-auto"
  >
      
      <div className=" flex max-h-64 relative">
        <div className="hidden sm:flex flex-grow bg-teal-500 max-w-[600px] relative">
          <div className=" flex items-center justify-center flex-grow ">
            Hello World..Never Give Up, KAIZEN
            <div className="z-10 bg-teal-500 p-6 h-full w-3 transform skew-x-6 absolute -right-5 top-0 "></div>
            </div>
          
        </div>
        <img src={homedata.image} className="w-[300px] h-64 bg-cover bg-center flex-grow" />
        
      </div>
      <div className="z-20 absolute h-64 w-full bg-gradient-to-t from-gray-900 to transparent top-0 left-0"></div>
      </div>
      
  

))}
</Slider>
        </div>
    )
}

export default Banner

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
      <div className={className} onClick ={onClick} className=" z-0 mx-0"  >
        <div className="glass3 relative  flex items-center justify-center  right-0 absolute z-10 h-8 top-1/2 p-2 w-10">
      <FontAwesomeIcon
                icon={faArrowCircleRight}
                className="-right-0 absolute z-10  h-5 hover:animate-bounce text-teal-500 text-xl"
      />
      </div>
    </div>
    )
   
  }
  
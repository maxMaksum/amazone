import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from '../Hero/Hero';
import styled from 'styled-components'
import {mockData2} from '../MockData/MockData'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowCircleRight, faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons'
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

function NewSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        prevArrow:<PreviousBtn/>,
        nextArrow:<NextBtn/>,
        
      };

    return (
      <div className="relative" style={{
        backgroundImage: `url("/linen3.jpg")`,
      }}>
        <Slider
          {...settings}
          className=" p-8 z-10 "
          
        >
          {mockData2.map((homedata) => (
            <div
              id={homedata.id}
              className="z-5 flex items-center justify-center h-96 w-full p-4 "
              style={{
                backgroundImage: `url("/linen3.jpg")`,
              }}
            >
              <div className=" z-10 flex flex-col sm:flex-row items-center justify-around h-96 md:h-full w-full relative glass2 p-2">
                <div className=" flex items-center h:2/3 justify-around sm:w-2/3 z-10 ">
                  <MyImage url={homedata.image} className="w-full h-full" />
                </div>
                <CardContentWelcome
                  excerpt={homedata.excerpt}
                  className="h-full w-full"
                />
              </div>
            </div>
          ))}
        </Slider>

        <div>
          <div className="absolute bg-green-500 z-0 w-40 h-40 rounded-full -right-10 -top-10"></div>
          <div className="absolute bg-green-500 z-0 w-40 h-40 rounded-full -left-10 -bottom-10"></div>
        </div>
      </div>
    );
}

export default NewSlider

function MyImage({url}){
  return(
    <div  className="h-full w-full">
        <img src={url} className="object-cover object-center z-0 h-full w-full"/>
    </div>
  )
}
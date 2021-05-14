import React from 'react'
import Image from 'next/image'

import CardImageHome from '../Card/CardImageHome'
import CardContent from '../Card/CardContent'


function Hero({homedata}) {
    return (
       

    
    <div id={homedata.id} className =" relative  h-100 relative bg-green-300 overflow-hidden p-6" style={{ 
        backgroundImage: `url("./linen.jpg")` 
      }}>
      
        <div className ="glass relative z-20 flex flex-col md:flex-row rounded p-2 h-100 ">
        
            <CardImageHome img={homedata.image} id={homedata.id} className="flex md:flex-grow w-full" />
            <CardContent title={homedata.title} excerpt={homedata.excerpt}/>
            
        </div>
        
        <div className="absolute glass2 z-0 w-40 h-40 rounded-full -right-10 -top-10"></div>
    <div className="absolute glass2   z-0 w-40 h-40 rounded-full -left-10 -bottom-10"></div>
    </div>
    

     
       
        
    ) 
}

export default Hero


import { StarIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { useState } from 'react'
import Currency from 'react-currency-formatter';

const upper=25;
const lower=20;

let myRandom =Math.floor(Math.random()*(upper-lower +1))

function Product({id, title, price, description, category, image}) {

    const [ratings] = useState(
        Math.floor(Math.random()*(upper-lower +1))
    )
  
    const [hasPrime] = useState(
        Math.random()<0.5
    )
    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
            <Image 
            src={image}
            width={200}
            height={200}
            objectFit="contain"
            />
            <h4>{title}</h4>
           
            <div className="flex ">
                {Array (ratings)
                .fill()
                .map((_, i)=>(
                    
                    <StarIcon 

                    key={i} 
                    
                    className="h-5 text-yellow-400"/>
                ))}
            </div>
            <p className="text-xs my-2 line-clamp-2">{description}</p>

            <div className="mb-5">
            <Currency
                quantity={price}
                currency="GBP"
                />
            </div>

            {hasPrime&&(
                <div className="flex lg:flex-col lg:mb-10 items-center space-x-2 -mt-5">
                    <img src="/prime-tag.png" Alt=""/>
                    <p>FREE NextT-day Delivery</p>
                </div>
            )}
            <button className="mx-auto btn">Add To Busket</button>

        </div>
    )
}

export default Product

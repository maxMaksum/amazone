import { StarIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Currency from 'react-currency-formatter';
import {useDispatch} from 'react-redux'
import {addBasket, removeBasket} from '../redux/slices'


function CheckoutProduct({id, title, price, description, category, image,ratings,hasPrime}){



const dispatch = useDispatch()

const addItemToBasket = ()=>{
    const products={
        id, title, price, description, category, image,ratings,hasPrime
    }

    dispatch(addBasket(products))

}

const removeItemFromBasket = ()=>{
    dispatch(removeBasket({id}))
}
    return (
      <div>
       

      
          <div className="grid grid-cols-5">
            <Image src={image} width={200} height={200} objectFit="contain" />

           
            <div className="col-span-3 mx-5">
              <p>{title}</p>
              <div className="flex ">
                {Array(ratings)
                  .fill()
                  .map((_, i) => (
                    <div key={i}>
                      <StarIcon key={i} className="h-5 text-yellow-400" />
                    </div>
                  ))}
              </div>

              <p className="text-xs my-2 line-clamp-2">{description}</p>

              <Currency  quantity={price} currency={"GBP"}/>

              {hasPrime&&(
                  <div className="flex items-center space-x-2">
                      <img src="/prime-tag.png" alt=""
                      loading="lazy"
                      className="w-12"
                      />
                      <p className="text-xs text-gray-500">Free Next-day Delivery</p>

                  </div>
              )}

            </div>

            <div  className="flex flex-col space-y-2 my-auto justify-self-end">
                <button onClick={addItemToBasket} className="btn"> Add to busket</button>
                <button onClick={removeItemFromBasket} className="btn">Remove from busket</button>
            </div>
          </div>
         
      </div>
    );
}

export default CheckoutProduct

import Header from "../components/Header";
import Image from 'next/image'
import {useSelector} from 'react-redux'
import {selectItems, selectTotal} from '../redux/slices'
import CheckoutProduct from "../components/CheckoutProduct";
import { useSession} from 'next-auth/client'
import Currency from 'react-currency-formatter';
import axios from 'axios'

import {  loadStripe } from '@stripe/stripe-js';


let stripePromise

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  }
  return stripePromise
}


function checkout() {

    const items = useSelector (selectItems)
    const total = useSelector (selectTotal)
    const [session] =useSession()
  

    const createCheckoutSession = async (event)=>{

        event.preventDefault()
        
        const stripe = await getStripe()

        const checkoutSession = await axios.post( '/api/create-checkout-session', {
            items:items,
            email:session.user.email,
          })

        const result = await stripe.redirectToCheckout({
          // Make the id field from the Checkout Session creation API response
          // available to this file, so you can provide it as parameter here
          // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
          sessionId : checkoutSession.data.id
        })

        if (result.error){
          alert(result.error)
        }
        // const {sessionId} = await fetch('/api/create-checkout-session',{
        // method:'POST',
        // headers: {
        //   'content-type': 'application/json'
        // },
        // body: JSON.stringify({
        //   items:items,
        //   email:session.user.email,
        // })
        // }).then(res=>res.json())
       
       
        
        // const { error } = await stripe.redirectToCheckout({
          // Make the id field from the Checkout Session creation API response
          // available to this file, so you can provide it as parameter here
          // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
        //   sessionId,
        // })
  
    }
    return (
      <div className="bg-gray-100">
        <Header />

        <div className="lg:flex max-w-screen-lg mx-auto bg-white">

          {/* left */}

          <div className="flex-grow  m-5 shadow-sm">
            <Image
              src="https://links.papareact.com/ikj"
              width={1020}
              height={250}
              objectFit="contain"
            />

            <div className="flex flex-col p-5 space-y-10 bg-white">
              <h1 className="text-3xl border-b pb-4">
                {items.length === 0
                  ? " Your Amazon Basket is empty"
                  : "Your Shopping Basket"}
              </h1>
              {items.map(
                ({
                  id,
                  title,
                  price,
                  description,
                  category,
                  image,
                  ratings,
                  hasPrime,
                }) => (
                  <CheckoutProduct
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    ratings={ratings}
                    hasPrime={hasPrime}
                  />
                )
              )}
            </div>
          </div>

          <div className="flex flex-col bg-white p-10 shadow-md">
            {/* right */}
            {items.length > 0 && (
              <div>
                <h2 className="whitespace-nowrap">
                  Subtotal ({items.length}): items
                  <span className="font-bold">
                  <Currency
                quantity={total}
                currency="GBP"
                />
                  </span>
                </h2>
                <button
                onClick={createCheckoutSession}
                role="link"
                disable={!session}
                  className={`btn mt-2 ${!session &&
                    `from-gray-300 to-gray-500 border-gray-200 text-gray-200 cursor-not-allowed`
                  }`}
                >
                  {!session ? ("Sign in to checkout") : ("Proceed to Checkout")}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
}

export default checkout

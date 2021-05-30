import Stripe from 'stripe'

const stripe = new Stripe (process.env.STRIPE_SECRET_KEY,{
apiVersion :'2020-08-27'
})

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export default async (req, res) => {
 const {items, email} = req.body
 console.log('ok ok ok')
//  console.log(items)
//  console.log(email)

 const transformedItems = items.map(item=>({
     description: item.description,
     quantity: 1,
     price_data:{
         currency:'usd',
         unit_amount:item.price*100,
         product_data:{
             name: item.title,
             images:[item.image]
         },

     }
 }))



  
 const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url:`${process.env.HOST_URL}/success`,
    cancel_url:`${process.env.HOST_URL}/checkout`,

    shipping_rates:["shr_1Iv0b9HYscoMhSgNI5qr9OYm",],
    shipping_address_collection:{
        allowed_countries:["US", "GB", "CA", ] 
    },

    line_items:transformedItems,
    
    mode:'payment',
   
    metadata:{
        email,
        images: JSON.stringify(items.map(item =>item.image))
    }
 })



 console.log( "hey")
 res.status(200).json({id:session.id})
}

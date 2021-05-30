import Stripe from 'stripe'

const stripe = new Stripe (process.env.STRIPE_SECRET_KEY,{
apiVersion :'2020-08-27'
})



export default async (req, res) => {

 const {items, email} = req.body

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


try{
    const session = await stripe.checkout.sessions.create({
        success_url:`${process.env.HOST_URL}/success`,
        cancel_url:`${process.env.HOST_URL}/checkout`,
        payment_method_types: ['card'],
        mode:'payment',
    
        shipping_rates:["shr_1Iv0b9HYscoMhSgNI5qr9OYm",],
        shipping_address_collection:{
            allowed_countries:["US", "GB", "CA", ] 
        },
    
        line_items:transformedItems,
        
        
       
        metadata:{
            email,
            images: JSON.stringify(items.map(item =>item.image))
        }
     })
    
     res.status(200).json({session})
     return
}

catch(err){
res.json({error:{message:err}})
return
}
  
 

}

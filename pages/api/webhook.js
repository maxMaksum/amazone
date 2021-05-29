import {buffer} from 'micro'

import * as admin from 'firebase-admin';

const serviceAccount = require("../../permission.json");



const app = !admin.apps.length ? admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
}):admin.app()




// secure connection to stripe
// build connection to stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

// endpoint secret

const endPoint = process.env.STRIPE_SIGNING_SECRET

const fulfillOrder = async (session)=>{
   const ab= JSON.parse(session.metadata.images)

    console.log("fulfilling order")
    console.log("hello" + ab)
   // Add a new document in collection "cities"
  //  console.log(session.total_details.amount_shipping/100)
  //  console.log("yello" + Json.parse(session.metadata.images))
   
   
   return app
    .firestore()
    .collection("users").doc(session.metadata.email)
    .collection('orders').doc(session.id)
    .set({
        amount_shipping:session.total_details.amount_shipping/100,
        amount :session.amount_total/100,
        images:JSON.parse(session.metadata.images),
        timestamp:admin.firestore.FieldValue.serverTimestamp()

    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
    
}
export default async(req, res) => {
    if (req.method === 'POST') {

        const requestBuffer = await buffer(req)
        const payload = requestBuffer.toString()
        const sig = req.headers['stripe-signature']
    
        let event;
    
        try {
          event = stripe.webhooks.constructEvent(payload, sig, endPoint)
        } catch (err) {
          // On error, log and return the error message
          console.log(`Error message: ${err.message}`)
          res.status(400).send(`Webhook Error: ${err.message}`)
          return
        }

        console.log('✅ Success:', event.id)
        // const session = event.data.object
        
        // fulfillOrder(session)
        //     .then(()=>res.status(200))
        //     .catch((err)=>res.status(400).send(`Webhoook Error ${err.message}` ))

        // handle the checkout, session, completed event

        if(event.type==="checkout.session.completed"){
            const session = event.data.object
            return fulfillOrder (session)
            .then(()=>res.status(200))
            .catch((err)=>res.status(400).send(`Webhoook Error ${err.message}` ))
        }
  }
}

export const config={
    api:{
        bodyParser:false,
        externalResolver:true,
    }
}
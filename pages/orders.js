import { getSession, useSession } from "next-auth/client";
import Header from "../components/Header";
import db from "../firebase";
import moment from "moment"
import Order from "../components/Order";

function orders({orders}) {

    console.log(orders)
    
    
    const session =useSession();
   

    return (
        <div>
            <Header/>
            <main className="max-w-screen-lg mx-auto p-10">
                <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-500">
                    Your Orders
                </h1>

                {session?(
                    <h2>{orders.length} Orders</h2>
                ):(
                <h2>Please sign in to see your orders</h2>
                )}

                <div className="mt-5 space-y-4">
                    {orders?.map(({id, amount, amountShipping,items, timesstamp, images})=>(
                        <Order
                        key={id}
                        id={id}
                        amount={amount}
                        amountShipping={amountShipping}
                        timestamp={timesstamp}
                        images={images}
                        items={items}

                        />
                    ))}
                </div>

            </main>
            
        </div>
    )
}

export default orders

export async function getServerSideProps(context){

   
    const stripe =require('stripe')(process.env.STRIPE_SECRET_KEY)

    const session = await getSession(context)
    console.log(session.user.email)

    if(!session){
        return{
            props:{}
        }
    }

    // firebase
    const stripeOrders = await db.
    collection('users').
    doc(session.user.email)
    .collection('orders')
    .orderBy('timestamp', 'desc')
    .get()

    // stripe orders

    
    const orders = await Promise.all
(
            stripeOrders.docs.map( async(order)=>({
                id: order.id,
                amount: order.data().amount,
                amount_shipping:order.data().amount_shipping,
                images: order.data().images,
                timesstamp: moment(order.data().timestamp.toDate()).unix(),
                items:(
                    await stripe.checkout.sessions.listLineItems(order.id, {
                        limit:100
                    })
                ).data,
            }))
           

)


        return{
            props:{
                // orders:orders
                orders
               
            }
        }
}

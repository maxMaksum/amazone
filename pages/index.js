import Head from 'next/head'
import Link from 'next/link'
import Banner from '../components/Banner'
import Header from '../components/Header'
import ProductFeed from '../components/ProductFeed'
import {dummyData} from '../Response'
export default function Home({data}) {
  console.log(data)

  return (
    
    <div className="bg-gray-50">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <div>
        <Header/>
        <main className="max-w-screen-2xl mx-auto">
          {/* banner */}
          <Banner/>
          {/* products & feed */}
          <ProductFeed products={data}/>
        </main>
     
        
      </div>
    </div>
  );
}


export async function getServerSideProps(contex){

   const useDummyData = false
   let res =""
   res = useDummyData? dummyData : await fetch(`https://fakestoreapi.com/products`).then(res=>res.json())

  const data =res


 

  return{
      props:{
          data
      }
  }
}

// https://fakestoreapi.com/docs

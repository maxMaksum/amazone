import Head from 'next/head'
import Link from 'next/link'
import GridList from '../components/Grid/GridList'
import {mockData2} from '../components/MockData/MockData'
import CardHome from '../components/Card/CardHome'
import NewSlider from '../components/Slider/NewSlider'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<NewSlider/>

    <GridList>
      {mockData2.map(d=>(
        <Link href={`/page/${d.id}`}>
        <div key={d.id}>
          <CardHome title={d.title} url={d.image} description={d.description} excerpt={d.excerpt}/>
          
        </div>
        </Link>
      ))}
      
      
    </GridList>
    
    </div>
  )
}

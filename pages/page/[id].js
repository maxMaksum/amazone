import CardHome from "../../components/Card/CardHome";
import CardProducts from "../../components/Card/CardProducts";
import {mockData2} from '../../components/MockData/MockData'
import Slider2 from "../../components/Slider/Slider2"
export async function getStaticProps(context) {

    const {params} = context
 
    const data = mockData2.find((item)=>item.id.toString()===params.id) 
    return {
      props: {data} // will be passed to the page component as props
    }
  }

  export async function getStaticPaths() {
    
   
    return {
      paths: mockData2.map((item)=>({
          params:{
              id:item.id.toString()  
              
          }
      })),
      fallback: false // See the "fallback" section below
    };
  }
function pageDetail({data}) {
    console.log(data)
    return (
        <div  style={{
          backgroundImage: `url("/linen3.jpg")`}} className="">
           <Slider2/>
           <CardProducts mockData2={data}/>
        </div>
        
    )
}

export default pageDetail


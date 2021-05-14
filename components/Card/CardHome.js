import CardContent from "./CardContent";
import CardImage from "./CardImage";

function CardHome({title, url,description, excerpt}) {

  const img= '/cotton2.png'
    return (
      <div  style={{
        backgroundImage: `url("/linen3.jpg")`}} className="flex w-full justify-center items-center p-2 mx-auto relative overflow-hidden">
        <div
          className="w-full max-w-4xl p-4 rounded-xl shadow-lg text-gray-50 overflow-hidden"
         
        >
          <div className="glass2 rounded">
            <CardImage url={url}/>
            <CardContent
              title={title}
              description={description}
              excerpt={excerpt}
              img={img}
           
            />
          </div>

         
        </div>
      </div>
    );
}

export default CardHome

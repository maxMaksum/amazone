import CardContent from "./CardContent";
import CardImage from "./CardImage";

function CardHome({title, url,description, excerpt}) {

  const img= '/cotton2.png'
    return (
      <div
        style={{
          backgroundImage: `url("/linen3.jpg")`,
        }}
        className="flex w-full justify-center items-center m-2 relative overflow-hidden p-6 rounded border border-green-500"
      >
        <div className="absolute bg-teal-500 z-0 w-32 h-32 rounded-full -right-10 -top-10"></div>
        <div className="absolute bg-teal-500   z-0 w-32 h-32 rounded-full -left-10 -bottom-10"></div>
        <div className="w-full max-w-4xl rounded-xl shadow-lg text-gray-50 overflow-hidden  glass2 p-2">
          <div className=" rounded">
            <CardImage url={url} />
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

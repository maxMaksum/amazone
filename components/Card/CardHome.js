import CardContent from "./CardContent";
import CardImage from "./CardImage";

function CardHome({title, url,description, excerpt}) {

  const img= '/cotton2.png'
    return (
      <div
        style={{
          backgroundImage: `url("/linen3.jpg")`,
        }}
        className="flex w-full justify-center items-center relative overflow-hidden p-6 rounded border border-green-500"
      >
       

        <div className="w-full max-w-4xl rounded-xl shadow-lg text-gray-50 overflow-hidden  glass2 p-2">
          <div className=" overflow-hidden">
            <div className="bg-teal-500 rounded">
              <CardImage
                url={url}
               
                img={img}
              />

              <div className="text-gray-900 w-full flex items-center justify-center relative ">
                <div className="z-10 bg-teal-500 p-6 w-full  transform skew-y-3 absolute -top-5 "></div>

                <div className="p-6 space-y-4 ">
                  <p className="text-xl text-left">{title}</p>
                  <p className="text-md text-left">{excerpt}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CardHome

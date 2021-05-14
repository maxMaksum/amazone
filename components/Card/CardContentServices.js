import CardImage from "./CardImage";

function CardContentServices({mockData2}) {

    return (
      <div className=" p-4 flex flex-col md:flex-row md:space-x-6 w-full rounded-xl shadow-lg text-gray-50 overflow-hidden">
        <div className="p-4 flex flex-col md:flex-row md:space-x-6 w-full rounded-xl shadow-lg text-gray-50 overflow-hidden">
          <div className="flex items-center justify-center">
            <CardImage url={mockData2.image} />
          </div>

          <div className="text-gray-900 bg-gray-50 rounded-xl w-full p-2 flex items-center justify-center ">
            <div className="p-6 space-y-4 ">
              <h1 className="text-xl font-bold text-left">{mockData2.title}</h1>
              <p className="text-xl text-left">{mockData2.excerpt}</p>
              <p className="text-md text-left">{mockData2.description}</p>
            </div>
          </div>
        </div>

        <img className="absolute bottom-0 right-0 h-40" src={`/cotton2.png`} />
      </div>
    );
}

export default CardContentServices

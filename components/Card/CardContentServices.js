import CardImage from "./CardImage";

function CardContentServices({mockData2}) {

    return (
      <div className=" p-4 flex flex-col md:flex-row md:space-x-6 w-full rounded-xl shadow-lg text-gray-50 overflow-hidden ">
        <div className="p-4 flex flex-col md:flex-row md:space-x-6 w-full rounded-xl shadow-lg text-gray-50 overflow-hidden glass2">
          <div className="flex items-center justify-center pt-0 bg-gray-100 relative">
            <CardImage url={mockData2.image} />
            
          </div>

          
          <div className="text-gray-900 bg-teal-300 rounded-xl w-full flex items-center justify-center relative ">
          
          <div className="z-10 sm:hidden bg-teal-300 p-6 sm:p-6 w-full sm:h-full sm:w-2 sm:bottom-0 sm:-right-10 sm:skew-y-0 sm:-skew-x-3 transform skew-y-3 absolute -top-5 sm:hiiden"></div>
          <div className=" hidden sm:block z-10 bg-teal-300 p-8 h-full w-3 -left-10 -skew-x-6 transform absolute"></div>
            <div className="p-6 space-y-4 ">
              
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

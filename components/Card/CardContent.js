function CardContent({title, description, excerpt,img}) {
    const cardtitle = title? title :(`Contact Us`)
    const carddescription = description? description :(`Contact Us`)
    const cardexcerpt = excerpt? excerpt :(`lorem5 lorem ll`)

  
    return (

      <div className="relative w-full flex flex-col">

        <div className=" flex items-center justify-center p-4">
          <div className="space-y-1 text-gray-900 bg-gray-50 rounded-xl w-full p-2">
            <h1 className="text-xl font-bold text-left">
              {cardtitle}
            </h1>
            <p className="text-md text-left">{cardexcerpt}</p>
           
          </div>
         
        </div>

      {/* <img className="absolute bottom-0 right-0 h-40" src={`/cotton2.png`} /> */}

       
      </div>
    );
}

export default CardContent

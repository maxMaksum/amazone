function CardContentWelcome({title, description, excerpt,img}) {
    const cardtitle = title? title :(`Welcome to BaliJavaSpirit`)
    const cardexcerpt = description? description :(`We are happy to serve you`)
   

  
    return (

      <div className="relative w-full flex flex-col">

        <div className=" flex items-center justify-center bg-teal-300 py-4 px-12 sm:px-24">
          <div className="space-y-1 text-gray-900 rounded-xl w-full glass2 ">
            <h1 className="text-xl font-bold text-center">
              {cardtitle}
            </h1>
            <p className="text-md text-center">{cardexcerpt}</p>
           
          </div>
         
        </div>

      {/* <img className="absolute bottom-0 right-0 h-40" src={`/cotton2.png`} /> */}

       
      </div>
    );
}

export default CardContentWelcome



function CardContentWelcome({title, description, excerpt,img}) {
    const cardtitle = title? title :(`Welcome to BaliJavaSpirit`)
    const cardexcerpt = description? description :(`We are happy to serve you`)
   

  
    return (
      <div
       
      >
        <div className="  w-full h-full flex items-center justify-center h-100 w-100 p-2">
          <div className="space-y-1 text-gray-900 w-full h-full">
            <h1 className="text-lg font-bold text-center">{cardtitle}</h1>
            <p className="text-md text-center">{cardexcerpt}</p>
          </div>
        </div>
      </div>
    );
}

export default CardContentWelcome

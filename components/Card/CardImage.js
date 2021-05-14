function CardImage({url}) {

    const img= url ? url : (`/boy.jpg`)
    return (
        <div className="relative">
        <div className="relative z-10  rounded-xl text-gray-700">
          <img src={img} className="bg-cover bg-center rounded-md" />
        </div>
      </div>
    )
}


export default CardImage

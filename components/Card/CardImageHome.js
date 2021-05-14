function CardImageHome({img, id}) {

    const url= img ? img : (`./boy.jpg`)
    return (
      <div className="relative bg-gray-50 overflow-hidden w-full"  >
        <div className="relative z-0 rounded-sm text-gray-700 overflow-hidden w-full">
          <img src={url} className="bg-cover bg-center " />
        </div>
        
        
      </div>
    );
}

export default CardImageHome

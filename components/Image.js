function Image({url}) {

    const pict = url? url:"./beach-work.jpg"
    
    return (
        <div className="justify-center">
            <img
            className=" justify-center w-full object-cover object-center h-82 sm:h-96 sm:object-cover sm:object-center  max-w-2xl shadow-lg rounded-lg"
            src={pict}
            alt="Woman workcationing on the beach"
          />
         
        </div>
    )
}

export default Image

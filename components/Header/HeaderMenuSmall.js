
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeaderMenuSmall({title, icon}) {
    return (
        <div className="glass2">
        <div className={`group flex justify-center items-center cursor-pointer mx-2 px-4 py-2 rounded`}>
            <FontAwesomeIcon icon={icon} className=" h-5 group-hover:animate-bounce text-green-500 w-12 mx-2"/>
            <p className="group-hover:opacity-100 text-green-500 text-xs">{title}</p>
        </div>
        </div>
    )
}

export default HeaderMenuSmall

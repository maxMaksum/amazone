import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebookF,faFacebookMessenger, faInstagram, faTwitter, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons'


function CardSocialLogo() {
    return (
        <div>
            <div className="flex items-center justify-around">
            <div className="flex flex-row space-x-2 mr-0  items-center group ">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className=" h-5 group-hover:animate-bounce text-teal-500 text-xl mr-2"
                />
                <span className="opacity-0 group-hover:opacity-100 text-xs">
                  WhatsApp
                </span>
              </div>
            
              <div className="flex flex-row  space-x-2 mr-0 items-center group ">
                <FontAwesomeIcon
                  icon={faFacebookMessenger}
                  className=" h-5 group-hover:animate-bounce text-teal-500 text-xl mr-2"
                />
                <span className="opacity-0 group-hover:opacity-100 text-xs">
                  Messenger
                </span>
              </div>
              <div className="flex flex-row  space-x-2 mr-0 items-center group ">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className=" h-5 group-hover:animate-bounce text-teal-500 text-xl mr-2"
                />
                <span className="opacity-0 group-hover:opacity-100 text-xs">
                  Instagram
                </span>
              </div>
             
        </div>
        </div>
    )
}

export default CardSocialLogo

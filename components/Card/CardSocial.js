import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebookF,faFacebookMessenger, faInstagram, faTwitter, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons'

function CardSocial() {
    return (
        <div className="inline-flex space-x-2">
              <div className="flex flex-col space-y-2  items-center group ">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className=" h-5 group-hover:animate-bounce text-teal-300 text-xl"
                />
                <span className="opacity-0 group-hover:opacity-100 text-xs">
                  Facebook
                </span>
              </div>
              <div className="flex flex-col  space-y-2 items-center group ">
                <FontAwesomeIcon
                  icon={faFacebookMessenger}
                  className=" h-5 group-hover:animate-bounce text-teal-300 text-xl"
                />
                <span className="opacity-0 group-hover:opacity-100 text-xs">
                  Messenger
                </span>
              </div>
              <div className="flex flex-col  space-y-2 items-center group ">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className=" h-5 group-hover:animate-bounce text-teal-300 text-xl"
                />
                <span className="opacity-0 group-hover:opacity-100 text-xs">
                  Twitter
                </span>
              </div>
              <div className="flex flex-col  space-y-2 items-center group ">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className=" h-5 group-hover:animate-bounce text-teal-300 text-xl"
                />
                <span className="opacity-0 group-hover:opacity-100 text-xs">
                  Twitter
                </span>
              </div>
              <div className="flex flex-col  space-y-2 items-center group ">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className=" h-5 group-hover:animate-bounce text-teal-300 text-xl"
                />
                <span className="opacity-0 group-hover:opacity-100 text-xs">
                  Linked In
                </span>
              </div>
        </div>
    )
}

export default CardSocial

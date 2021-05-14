import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebookF,faFacebookMessenger, faInstagram, faTwitter, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons'


function CardSocialLogo() {
    return (
        <div>
            <div className="flex items-center justify-around">
              <div className="flex flex-row space-x-2 mr-4  items-center group ">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className=" h-5 group-hover:animate-bounce text-teal-300 text-xl mr-2"
                />
                <span className="opacity-0 group-hover:opacity-100 text-xs">
                  Facebook
                </span>
              </div>
              <div className="flex flex-row  space-x-2 mr-4 items-center group ">
                <FontAwesomeIcon
                  icon={faFacebookMessenger}
                  className=" h-5 group-hover:animate-bounce text-teal-300 text-xl mr-2"
                />
                <span className="opacity-0 group-hover:opacity-100 text-xs">
                  Messenger
                </span>
              </div>
              <div className="flex flex-row  space-x-2 mr-4 items-center group ">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className=" h-5 group-hover:animate-bounce text-teal-300 text-xl mr-2"
                />
                <span className="opacity-0 group-hover:opacity-100 text-xs">
                  Twitter
                </span>
              </div>
              <div className="flex flex-row  space-x-2 mr-4 items-center group ">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className=" h-5 group-hover:animate-bounce text-teal-300 text-xl mr-2"
                />
                <span className="opacity-0 group-hover:opacity-100 text-xs">
                  Twitter
                </span>
              </div>
              <div className="flex flex-row  space-x-2 mr-4 items-center group ">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className=" h-5 group-hover:animate-bounce text-teal-300 text-xl mr-2"
                />
                <span className="opacity-0 group-hover:opacity-100 text-xs">
                  Linked In
                </span>
              </div>
        </div>
        </div>
    )
}

export default CardSocialLogo

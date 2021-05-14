import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebookF,faFacebookMessenger, faInstagram, faTwitter, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons'
import { faPhoneAlt, faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

function CardContact() {
    return (
        <div className="flex flex-col space-y-4 ">
                        <div className="inline-flex space-x-2 items-center group">
                            <FontAwesomeIcon icon={faPhoneAlt} className=" h-5 group-hover:animate-bounce text-teal-300 text-xl"/>
                            <span>0852 0510 4517</span>
                        </div>

                        <div className="inline-flex space-x-2 items-center group ">
                            <FontAwesomeIcon icon={faEnvelope} className=" h-5 group-hover:animate-bounce text-teal-300 text-xl"/>
                            <span>sales@balispirit.com</span>
                        </div>
                        <div className="inline-flex space-x-2 items-center group ">
                            <FontAwesomeIcon icon={faWhatsapp} className=" h-5 group-hover:animate-bounce text-teal-300 text-xl"/>
                            <span>0852 0510 4517</span>
                        </div>
                        <div className="inline-flex space-x-2 items-center group ">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className=" h-5 group-hover:animate-bounce text-teal-300 text-xl"/>
                            <span>LotTunduh Ubud Bali</span>
                        </div>
                        
                    </div>
                    
    )
}

export default CardContact

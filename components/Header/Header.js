import {useState} from 'react'
import Link from'next/link'
import Image from 'next/image'
import HeaderItems from './HeaderItems'
import HeaderItemsPng from './HeaderItemsPng'
import { faHome, faEnvelope, faUsers, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faFacebookF,faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import HeaderMenuSmall from './HeaderMenuSmall'

function Header() {
    const [open, setOpen] = useState(false)
    const hanldeClick = ()=> setOpen(!open)
    return (
      <div className="h-100 w-full fixed inset-x-0 z-50 p-2"  style={{
        backgroundImage: `url("/linen3.jpg")`
      }} >
        <div className="relative bg-teal-500 h-18 flex flex-col w-full p-2">

          <header className="glass2 flex flex-row  justify-around items-center h-auto  rounded pt-2">

<div className="w-full flex flex-grow items-center">
            <div className="flex items-center w-full">
              <Link href="/">
                <a className="w-full flex flex-row  items-center justify-start group">
                  
                    <div className="ml-2">
                      <Image
                        className="bg-cover bg-center hover:animate-bounce text-gray-50"
                        src="/logo.png"
                        width={40}
                        height={40}
                      />
                    
                    </div>
                      <p className="text-gray-50 italic text-center  text-xs ml-2 w-full ">BALIJAVA SPIRIT</p>
                </a>
              </Link>
              </div>

              <div className="flex justify-start items-center invisible sm:visible ml-4">
                <Link href="/page/5">
                  <a>
                    <HeaderItems title="About" icon={faUsers} />
                  </a>
                </Link>
                <Link href="/contact">
                  <a>
                    <HeaderItems title="Contact" icon={faEnvelope} />
                  </a>
                </Link>
              </div>
            </div>

            <div className="flex justify-start items-center pr-2">
            <HeaderItems title="Whatsapp" icon={faWhatsapp} />
            
             
              <Link href="/page/2">
                <a>
                <HeaderItemsPng title="Services" icon={'/cotton.png'} />
                </a>
              </Link>

              <Link href="/">
                <a>
                  <HeaderItems title="Home" icon={faHome} />
                </a>
              </Link>
           

              <div onClick={hanldeClick} className="visible sm:invisible">
                <HeaderItems title="Menu" icon={faEllipsisV} />
              </div>
            </div>
          </header>
        </div>
        <div className="sm:hidden">
          {open && (
            <div
              style={{
                backgroundImage: `url("./linen3.jpg")`,
              }}
              className="h-100 w-100 sm:invisible flex items-center justify-center p-2"
            >
              <Link href="/page/5">
                <a>
                  <HeaderMenuSmall title="About" icon={faUsers} />
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <HeaderMenuSmall title="Contact" icon={faEnvelope} />
                </a>
              </Link>

              <HeaderMenuSmall title="Facebook" icon={faFacebookF} />
            </div>
          )}
        </div>
      </div>
    );
}

export default Header

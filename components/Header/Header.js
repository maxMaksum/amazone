import {useState} from 'react'
import Link from'next/link'
import Image from 'next/image'
import HeaderItems from './HeaderItems'

import { faHome, faEnvelope, faUsers, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faFacebookF,faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import HeaderMenuSmall from './HeaderMenuSmall'

function Header() {
    const [open, setOpen] = useState(false)
    const hanldeClick = ()=> setOpen(!open)
    return (
      <div className="h-100 w-100 fixed inset-x-0 z-50">
        <div className="relative bg-green-600 h-16 flex flex-col justify-center">
          <header className="glass2 flex flex-row  justify-around items-center h-auto">

            <div className="flex flex-grow justify-start items-center">
              <Link href="/">
                <a>
                  <div className="flex justify-evenly items-center ">
                    <div className="flex flex-col justify-center group">
                      <Image
                        className="object-contain"
                        src="/logo.png"
                        width={50}
                        height={50}
                      />
                    </div>

                    <p className="ml-2 text-gray-50 italic ">BALIJAVASPIRIT</p>
                  </div>
                </a>
              </Link>

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
              <Link href="/">
                <a>
                  <HeaderItems title="Home" icon={faHome} />
                </a>
              </Link>
              <HeaderItems title="Whatsapp" icon={faWhatsapp} />
              <HeaderItems title="Facebook" icon={faFacebookF} />
           

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
            </div>
          )}
        </div>
      </div>
    );
}

export default Header

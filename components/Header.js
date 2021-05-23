import Image from 'next/image'
import {MenuIcon, SearchIcon, ShoppingCartIcon} from '@heroicons/react/outline'
import {signIn, signOut, useSession} from 'next-auth/client'
import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'
import {selectItems} from '../redux/slices'

function Header() {

  const [ session, loading ] = useSession()
  const router = useRouter()
 
  const items = useSelector (selectItems)
    return (
      <header className="sticky top-0 z-50">
        {/* top header */}
        <div className="flex items-center bg-gray-700 p-1 py-2 space-x-4">
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <Image
            onClick={()=>router.push('/')}
              src="https://links.papareact.com/f90"
              width={"80"}
              height={"80"}
              objectFit="contain"
              className="cursor-pointer text-white"
            />
          </div>
          {/* Search */}
          <div className="hidden sm:flex items-center h-10 flex-grow cursor-pointer rounded-md bg-yellow-400 hover:bg-yellow-500">
            <input
              type="text"
              className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 "
            />
            <div className="text-white p-2">
                 <SearchIcon className="h-6" />
            </div>
          </div>

          {/* right */}
         <div className="flex justify-end md:justify-start flex-grow  flex-wrap max-w-[300px] sm:max-w-[350px]  md:max-w-[450px]">
              <div className=" flex items-center flex-grow  lg:w-24 text-white  text-xs space-x-4">
            <div onClick={!session ? signIn: signOut} className="link">
              <p>{session ?`Hello ${session.user.name}`:"Sign In"}</p>
              <p className="font-extrabold md:text-sm">Account & List</p>
            </div>
            <div className="link">
              <p>Return</p>
              <p className="font-extrabold md:text-sm"> &Orders</p>
            </div>
            <div   onClick={()=>router.push('/checkout')}className="link relative flex items-center">
                <span className="absolute top-0 -right-1 sm:-right-1 bg-yellow-400 rounded-full h-4 w-4 text-center font-bold text-black">{items.length}</span>
              <ShoppingCartIcon className="h-8" />
              <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
            </div>
          </div>
          </div>
          
        </div>
        {/* bottom header */}
        <div className="flex items-center bg-gray-600 text-white text-sm space-x-3 p-2 pl-6"> 
            <div className="link">
            <MenuIcon className="h-6"/>
            </div>
            <p className="link">All</p>
            <p className="link">Prime Video</p>
            <p className="link">Amazon Business</p>
            <p className="link"> Today's Deal</p>
            <p className="link hidden md:inline">Electronic</p>
            <p className="link hidden md:inline">Food & Recovery</p>
            <p className="link hidden md:inline">Prime</p>
            <p className="link hidden md:inline">Buy Again</p>
            <p className="link hidden md:inline">Shopper Toolit</p>
            <p className="link hidden md:inline">Health & Personal Care</p>
        </div>
      </header>
    );
}

export default Header

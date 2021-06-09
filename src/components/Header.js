import Image from "next/image";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";


function Header() {

    const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);

    return (
        <header>
            <div className="flex items-center   bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-cetner rounded-md flex-grow sm:flex-grow-0">
                    <Image
                        onClick={() => router.push('/')}
                        src='https://links.papareact.com/f90'
                        width={150}
                        height={40}
                        objectFit="contrain"
                        className='cursor-pointer'/>
                </div>
                {/* center search */}
                <div className='hidden sm:flex bg-yellow-400 items-center rounded-md cursor-pointer flex-grow h-10 hover:bg-yellow-500'>
                    <input className='p-2 h-full w-6 px-4 focus:outline-none flex-grow flex-shrink rounded-l-md'type="text" />
                    <SearchIcon className='h-12 p-4' />

                </div>
                {/* r top */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div onClick={!session ? signIn : signOut} className='link' >
                        <p>{session ? `Hello, ${session.user.name}` : "Sign in"} </p>
                        <p className='font-extrabold md:text-small'>Account & Lists</p>
                    </div>
                    <div className='link'>
                        <p>Returns</p>
                        <p className='font-extrabold md:text-small'>& Orders</p>
                    </div>
                    <div onClick={() => router.push('/checkout')} className='reltive link flex items-center'>
                        <span className="absolute top-3 right-5 md:right-14 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                            {items.length}
                        </span>
                        <ShoppingCartIcon className='h-10 ' />
                        <p className='hidden md:inline mt-2 font-extrabold md:text-small'>Basket</p>
                    </div>
                </div>
            </div>
            {/*bottom nav */}
            <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
                <p className='link flex items-center'>
                    <MenuIcon className='h-6 mr-1' />
                    All
                </p>
                <p className='link'> Prime Video </p>
                <p className='link'>Amazon Business</p>
                <p className='link'>Today's Deals </p>
                <p className='link hidden lg:inline-flex'>Electronics</p>
                <p className='link hidden lg:inline-flex'>Food & Groceries</p>
                <p className='link hidden lg:inline-flex'>Prine</p>
                <p className='link hidden lg:inline-flex'>Buy Again</p>
                <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
                <p className='link hidden lg:inline-flex'>Health & Personal care</p>
            </div>
        </header>
    )
}

export default Header


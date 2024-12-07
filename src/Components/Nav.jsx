import React,{useState} from 'react'
import { ContextAPI } from '../ContextApi'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {showSideBar, setShowSideBar} = ContextAPI()
  return (
    <nav className="px-6 py-4 shadow">
        <div className="lg:items-center lg:justify-between lg:flex">
            <div className="flex items-center justify-between">
                <a href="#" className="mx-auto ">
                    <code className='text-gray-500 text-xl font-extrabold translate-x-9'>.<img class="w-auto transform rotate-180 h-7" src="https://merakiui.com/images/logo.svg" alt="" /> i x y</code>
                </a>

                {/* <!-- Mobile menu button --> */}
                <div className="lg:hidden">
                    <button onClick={() => setShowSideBar(true)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        <svg xmlns="http://www.w3.org/2000/svg" className={`${!isOpen ? "block" : "hidden"} w-6 h-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
            <div className={`absolute inset-x-0 hidden z-20 w-full px-6 py-4 overflow-hidden lg:h-full transition-all ${isOpen ? "h-auto":"h-0"} duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}>
                <a href="/" className="block px-3 py-2 text-gray-600 rounded-lg dark:text-gray-200 hover:bg-gray-100 lg:mx-2">Home</a>
                <a href="#" className="block px-3 py-2 text-gray-600 rounded-lg dark:text-gray-200 hover:bg-gray-100 lg:mx-2">About</a>
                <a href="#" className="block px-3 py-2 text-gray-600 rounded-lg dark:text-gray-200 hover:bg-gray-100 lg:mx-2">Contact</a>
            </div>
        </div>
    </nav>
  )
}

export default Nav

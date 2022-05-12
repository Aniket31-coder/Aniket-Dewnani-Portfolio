import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/assets/logo.png'

function NavbarComponent() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };
    return (
        <nav className='flex items-center flex-wrap bg-transparent px-3 md:px-12'>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <Image src={logo} width="60px" height="60px" alt="logo" className="h-20 w-20" />
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-gray-600 rounded lg:hidden ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-8 h-8'
            fill='none'
            stroke='white'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? 'bg-gray-500 opacity-90 rounded-2xl z-50 lg:opacity-100 lg:bg-transparent lg:rounded-none' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto text-center lg:space-x-14 w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='#about'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-2xl text-white text-xl font-semibold cursor-pointer items-center justify-center hover:bg-gray-600 hover:text-white '>
                About Me
              </a>
            </Link>
            <Link href='#skills'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-2xl text-white text-xl font-semibold cursor-pointer items-center justify-center hover:bg-gray-600 hover:text-white'>
                Skills
              </a>
            </Link>
            <Link href='#experience'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-2xl text-white text-xl font-semibold cursor-pointer items-center justify-center hover:bg-gray-600 hover:text-white'>
                Experience
              </a>
            </Link>
            <Link href='#contact'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-2xl text-white text-xl font-semibold cursor-pointer items-center justify-center hover:bg-gray-600 hover:text-white'>
                Contact Me
              </a>
            </Link>
          </div>
        </div>
      </nav>
        // <nav className='flex justify-between items-center bg-transparent py-4 text-white'>
        //     <div className="md:flex items-center space-x-2">
        //         <Image src={logo} width="60px" height="60px" alt="logo" className="h-20 w-20" />
        //         {/* <h1 className="titleName text-xl tracking-widest font-bold pl-3 text-black">Aniket Dewnani</h1> */}
        //     </div>
        //     <button className='inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto  
        //     hover:text-white outline-none' onClick={handleClick}>
        //         <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        //             <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16'/>
        //         </svg>
        //     </button>
        //     <div className="hidden lg:flex items-center space-x-14">
        //         <div className="flex items-center space-x-14">
        //             <h1 className="text-xl font-semibold text-white cursor-pointer hover:opacity-90">
        //                 <Link href="#about">About Me</Link>
        //             </h1>
        //             <h1 className="text-xl font-semibold text-white cursor-pointer hover:opacity-90">
        //                 <Link href="#skills">Skills</Link> 
        //             </h1>
        //             <h1 className="text-xl font-semibold text-white cursor-pointer hover:opacity-90">
        //                 <Link href="#experience">Experience</Link>
        //             </h1>
        //             <h1 className="text-xl font-semibold text-white cursor-pointer hover:opacity-90">
        //                 <Link href="#contact">Contact Me</Link>
        //             </h1>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default NavbarComponent
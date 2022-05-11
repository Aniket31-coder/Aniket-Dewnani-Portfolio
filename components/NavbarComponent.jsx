import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/assets/logo.png'

function NavbarComponent() {
  return (
    <div className='flex justify-between items-center bg-transparent py-4 text-white'>
        <div className="flex items-center space-x-2">
            <Image src={logo} width="60px" height="60px" alt="logo" className="h-20 w-20" />
            {/* <h1 className="titleName text-xl tracking-widest font-bold pl-3 text-black">Aniket Dewnani</h1> */}
        </div>
        <div className="flex items-center space-x-14">
            <div className="flex items-center space-x-14">
                <h1 className="text-xl font-semibold text-white cursor-pointer hover:opacity-90">
                    <Link href="#about">About Me</Link>
                </h1>
                <h1 className="text-xl font-semibold text-white cursor-pointer hover:opacity-90">
                    <Link href="#skills">Skills</Link> 
                </h1>
                <h1 className="text-xl font-semibold text-white cursor-pointer hover:opacity-90">
                    <Link href="#experience">Experience</Link>
                </h1>
                <h1 className="text-xl font-semibold text-white cursor-pointer hover:opacity-90">
                    <Link href="#contact">Contact Me</Link>
                </h1>
            </div>
        </div>
    </div>
  )
}

export default NavbarComponent
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import NavbarComponent from './NavbarComponent'

function BannerComponent() {
    const Typer = ({speed=250, child="Aniket"}) => 
    {
      const [idx, setidx] = useState(0);
      useEffect(() => {
        const timer = window.setInterval(() => setidx((v) => v + 1), speed);
        return () => window.clearInterval(timer);
      });
    
      return <div className='hover:animate-wiggle'>{child.substring(0, idx)}</div>;
    };
      const msg= "Aniket Dewnani"
    return (
    <div className={`scroll-smooth ${styles.maincontainer}`}>
        <NavbarComponent />
        {/* Banner Section */}
        <div className="flex">
          <div className='md:pt-48 flex-1'>
            <p className='font-bold text-2xl'>Hi, I am</p>
            <h1 className="text-2xl md:text-6xl font-bold">
              <Typer child={msg} speed={150} />
            </h1>
            <p className='text-gray-500 text-lg tracking-wide font-bold pt-2'>Front-End Developer</p>
            <div className='flex w-72 mt-4 md:mt-12'>
              <div className='flex-1'>
                <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold pt-1 px-2 rounded' onClick={() => {window.location=("mailto:aniketdewnani31@gmail.com")}}>
                  <Image src="/assets/email.svg" width="25px" height="25px" alt="Social Media Icon" />
                </button>
              </div>
              <div className='flex-1'>
                <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold pt-1 px-2 rounded' onClick={() => {window.open("https://www.github.com/Aniket31-coder")}}>
                  <Image src="/assets/github.svg" width="25px" height="25px" alt="Social Media Icon" />
                </button>
              </div>
              <div className='flex-1'>
                <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold pt-1 px-2 rounded' onClick={() => {window.open("https://www.linkedin.com/in/aniket-dewnani-076392193/")}}>
                  <Image src="/assets/linkedin.svg" width="25px" height="25px" alt="Social Media Icon" />
                </button>
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <div className="w-10/12 h-11/12" style={{overflow: "hidden"}}> 
              <Image src="/assets/profilepic.png" width="658px" height="715px" alt="My Profile Picture" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default BannerComponent
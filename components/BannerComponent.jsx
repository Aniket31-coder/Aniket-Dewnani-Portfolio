import React, { useState, useEffect } from 'react'
import Image from 'next/image'

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
        <div className="flex px-3 lg:px-14">
          <div className='md:pt-48 flex-1' data-aos="fade-right" data-aos-duration="600">
            <p className='font-bold text-2xl'>Hi👋, I am</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
              <Typer child={msg} speed={150} />
            </h1>
            <p className='text-gray-500 text-lg tracking-wide font-bold pt-2'>Front-End Developer</p>
            <div className='flex w-72 mt-4 md:mb-6 lg:mb-0 md:mt-12'>
              <div className='flex-1'>
                <a target="_blank" href="mailto:aniketdewnani31@gmail.com" rel="noopener noreferrer" className='bg-gray-500 hover:bg-gray-200 text-white font-bold pt-3 px-2 rounded'>
                  <Image src="/assets/email.svg" width="25px" height="25px" alt="Social Media Icon" />
                </a>
              </div>
              <div className='flex-1'>
                <a target="_blank" href="https://www.github.com/Aniket31-coder" rel="noopener noreferrer" className='bg-gray-500 hover:bg-gray-200 text-white font-bold pt-3 px-2 rounded'>
                  <Image src="/assets/github.svg" width="25px" height="25px" alt="Social Media Icon" />
                </a>
              </div>
              <div className='flex-1'>
                <a target="_blank" href="https://www.linkedin.com/in/aniket-dewnani-076392193/" rel="noopener noreferrer" className='bg-gray-500 hover:bg-gray-200 text-white font-bold pt-3 px-2 rounded'>
                  <Image src="/assets/linkedin.svg" width="25px" height="25px" alt="Social Media Icon" />
                </a>
              </div>
            </div>
          </div>
          <div className='flex-1' data-aos="fade-down-left" data-aos-duration="600">
            <div className="w-full lg:w-10/12 h-full flex md:mx-auto xl:mx-0 xl:pt-5" style={{overflow: "hidden"}}> 
              <Image src="/assets/profilepic.png" priority={true} className="items-baseline" width="658px" height="700px" alt="My Profile Picture" />
            </div>
          </div>
        </div>
  )
}

export default BannerComponent
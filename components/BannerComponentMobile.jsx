import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import styles from '../styles/Banner.module.css'

function BannerComponentMobile() {
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
        <>
            <div className="flex absolute bottom-0 w-full h-5/6" data-aos="zoom-in-left" data-aos-duration="1200">
            <Image src="/assets/profilepic.png" priority={true} className='object-cover object-left overflow-hidden' width="650px" height="1000px" alt="My Profile Picture" />
            </div>
            <div className={` ${styles.bannerText} bottom-0 h-1/3 text-white absolute z-10`}>
                {/* w-full h-1/3 px-3 */}
            </div>
            <div className='flex bottom-0 w-full h-1/6 mb-2 items-center px-5 absolute text-white z-20' data-aos="slide-right" data-aos-duration="900">
                <div className='flex w-5/6 flex-col'>
                    <p className='font-bold text-2xl'>Hi👋, I am</p>
                    <h1 className="text-4xl font-bold">
                    <Typer child={msg} speed={150} />
                    </h1>
                    <p className='text-lg tracking-wide font-bold pt-2'>Front-End Developer</p>
                </div>
                <div className='flex w-1/6 flex-col justify-center' data-aos="slide-left" data-aos-duration="900">
                    <div>
                        <button className='hover:bg-gray-300 bg-white text-white font-bold pt-2 px-2 rounded' onClick={() => {window.location=("mailto:aniketdewnani31@gmail.com")}}>
                        <Image src="/assets/email.svg" width="30px" height="30px" alt="Social Media Icon" />
                        </button>
                    </div>
                    <div>
                        <button className='hover:bg-gray-300 bg-white text-white font-bold pt-2 px-2 rounded' onClick={() => {window.open("https://www.github.com/Aniket31-coder")}}>
                        <Image src="/assets/github.svg" width="30px" height="30px" alt="Social Media Icon" />
                        </button>
                    </div>
                    <div>
                        <button className='hover:bg-gray-300 bg-white text-white font-bold pt-2 px-2 rounded' onClick={() => {window.open("https://www.linkedin.com/in/aniket-dewnani-076392193/")}}>
                        <Image src="/assets/linkedin.svg" width="30px" height="30px" alt="Social Media Icon" />
                        </button>
                    </div>
                </div>
            </div>
        </>
  )
}

export default BannerComponentMobile

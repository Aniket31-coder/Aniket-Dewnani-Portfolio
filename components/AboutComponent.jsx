import React from 'react'
import Image from 'next/image'

function AboutComponent() {
  return (
    <div id="about" className="pb-24 pt-12">
        <div className="border-x-2 border-gray-600 w-fit px-4 mx-auto" data-aos="fade-up" data-aos-duration="700">
        <h4 className='font-bold titleName text-2xl text-center tracking-wider'>About Me 🙋‍♂️</h4>
        </div>
    
        <div className='flex w-11/12 md:w-10/12 p-6 rounded-2xl mt-6 mx-auto items-center'>
        <div className='hidden md:block flex-1 text-center' data-aos="flip-left" data-aos-duration="600">
            <Image src="/assets/logo.png" alt="Logo" width={"230px"} height={"230px"} />
        </div>
        <div className='flex-1 rounded-2xl text-center md:text-justify bg-slate-700 text-gray-900 p-4' data-aos="zoom-in-up" data-aos-duration="600">
            <div className="bg-stone-100 p-4 rounded-xl oleofont">
            I am a Fourth-Year Computer Engineering Student, who likes to learn about new CSS Frameworks and technologies. I honed my skills at <span className="text-gray-800 font-semibold">web-development</span> and <span className="text-gray-800 font-semibold">problem solving</span>.
            <br />
            I design websites using HTML, CSS, ReactJS and NextJS. Being a CSS lover, I utilize CSS frameworks such as Bootstrap and TailwindCSS for making my website. 
            </div>
        </div>
        </div>
    </div>
  )
}

export default AboutComponent

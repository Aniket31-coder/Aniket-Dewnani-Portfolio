import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

import NavbarComponent from '../components/NavbarComponent'
import styles from '../styles/Home.module.css'

export default function Home() {

  const Typer = ({speed=250, child="Aniket"}) => 
{
  const [idx, setidx] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setidx((v) => v + 1), speed);
    return () => window.clearInterval(timer);
  });

  return <div className='animate-wiggle'>{child.substring(0, idx)}</div>;
};
  const msg= "Aniket Dewnani"
  return (
    <div>
      <Head>
        <title>Aniket Dewnani&apos;s Portfolio</title>
        <meta name="description" content="Aniket Dewnani's Creative Portfolio" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>
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


      {/* About Me Section */}
      <div className={styles.aboutsection}>
        <div id="about" className="pb-24 pt-12">
          <div className="border-x-2 border-gray-600 w-fit px-4 mx-auto">
            <h4 className='font-bold titleName text-2xl text-center tracking-wider'>About Me</h4>
          </div>
        
          <div className='flex w-10/12 p-6 rounded-2xl mt-6 mx-auto'>
            <div className='flex-1 text-center'>
              <Image src="/assets/logo.png" alt="Logo" width={"230px"} height={"230px"} />
            </div>
            <div className='flex-1 rounded-2xl text-center bg-slate-700 text-gray-900 p-4'>
              <div className="bg-stone-100 p-4 rounded-xl oleofont">
                Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros. 
              </div>
            </div>
          </div>
        </div>

      {/* Skills Section */}

      <div id="Skills" className="pb-24 pt-12">
        <div className="border-x-2 border-gray-600 w-fit px-4 mx-auto">
          <h4 className='font-bold titleName text-2xl text-center tracking-wider'>Skills</h4>
        </div>
      
      <div className='flex w-10/12 p-1 mt-6 mx-auto'>
        <div className='grid grid-cols-4 w-full justify-center gap-4'>
          <div role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
            <Image src="/assets/html.png" width={"110px"} height={"120px"} alt="HTML" />
          </div>

          <div role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
            <Image src="/assets/css.png" width={"90px"} height={"120px"} alt="HTML" />
          </div>

          <div role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
            <Image src="/assets/reactjs.png" width={"110px"} height={"100px"} alt="HTML" />
          </div>

          <div role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
            <Image src="/assets/nodejs.png" width={"110px"} height={"80px"} alt="HTML" />
          </div>

          <div role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
            <Image src="/assets/java.png" width={"65px"} height={"100px"} alt="HTML" />
          </div>

          <div role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
            <Image src="/assets/python.webp" width={"110px"} height={"110px"} alt="HTML" />
          </div>

          <div role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
            <Image src="/assets/figma.svg" width={"110px"} height={"80px"} alt="HTML" />
          </div>

        </div>
      </div>
      </div>



      {/* Experience Section */}

      <div id="experience" className="pb-24 pt-12">
        <div className="border-x-2 border-gray-600 w-fit px-4 mx-auto">
          <h4 className='font-bold titleName text-2xl text-center tracking-wider'>Experience</h4>
        </div>
      
      <div className='w-6/12 p-1 mt-6 border-4 border-dashed border-stone-800 mx-auto'>
        <div className='flex w-full border-4 border-dashed border-stone-700 p-4 text-center text-gray-900'>
        Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros. 
        </div>
      </div>
      </div>



      {/* Contact Me Section */}

      <div id="contact" className="pb-24 pt-12">
        <div className="border-x-2 border-gray-600 w-fit px-4 mx-auto">
          <h4 className='font-bold titleName text-2xl text-center tracking-wider'>Contact Me</h4>
        </div>
      
      <div className='w-6/12 p-1 mt-6 border-4 border-dashed border-stone-800 mx-auto'>
        <div className='flex w-full border-4 border-dashed border-stone-700 p-4 text-center text-gray-900'>
        Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros. 
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

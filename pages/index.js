import Head from 'next/head'
import React from 'react'
import dynamic from 'next/dynamic'

// import SkillsComponent from '../components/SkillsComponent'
import styles from '../styles/Home.module.css'
import BannerComponent from '../components/BannerComponent'
import AboutComponent from '../components/AboutComponent'
import ExperienceComponent from '../components/ExperienceComponent'
import ContactComponent from '../components/ContactComponent'
import NavbarComponent from '../components/NavbarComponent'
import BannerComponentMobile from '../components/BannerComponentMobile'
import FooterComponent from '../components/FooterComponent'

const SkillsComponent = dynamic(
  () => import('../components/SkillsComponent'),
  { ssr: false }
)

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aniket Dewnani&apos;s Portfolio</title>
        <meta name="description" content="Aniket Dewnani's Creative Portfolio" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <div className={`${styles.maincontainer}`}>
        <NavbarComponent />
        <div className='hidden md:block'>
          <BannerComponent />
        </div>
        <div className='block md:hidden'>
          <BannerComponentMobile /> 
        </div>
        
      </div>
      <div className={styles.aboutsection}>
        {/* About Me Section */}
        <AboutComponent />
        {/* Skills Section */}
        <SkillsComponent />
        {/* Experience Section */}
        <ExperienceComponent />
        {/* Contact Me Section */}
        <ContactComponent />

        <FooterComponent />
      </div>
    </div>
  )
}
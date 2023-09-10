import React, { useEffect } from 'react'
import MainSection from './MainSection'
import Header from '../nav/Header'
import Footer from '../nav/Footer'
import { PAGE_IDS } from '../nav/MainMenuLinks'
import OurStaff from './OurStaff'
import Image from 'next/image'
const links = [
  {
    label:'NAV_About',
    href:'/#aboutus',
  },
  {
    label:'NAV_Programs',
    href:'/ourprograms',
  },
  {
    label:'NAV_Experts',
    href:'/ourexperts',
    active:true,

  },
  {
    label:'NAV_Gallery',
    href:'/ourexperts/#footer_gallery',
  },
  {
    label:'NAV_Partners',
    href:'/#ourpartners',
  },
  {
    label:'NAV_Contact',
    href:'/ourexperts/#footer_contactus',
  },
  {
    href:'/#shop',
    children:(<Image
      src="/images/shoplogo-orange-cropped.svg"
      alt="Therapedia logo"
      width={150}
      height={0} 
      
      />)
  }
]

const OurExpertsPageComponent = ({}) => {
  return (
    <div className='flex flex-col  w-full h-full overflow-x-hidden scroll-smooth'>
      <div className='flex flex-col w-full h-full'>
        <Header pageLabel="ourexperts" links={links}/>
        <MainSection />
        <OurStaff/>
        <Footer />
      </div> 
    </div>
  )
}

export default OurExpertsPageComponent
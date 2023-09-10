import React from 'react'
import MainSection from './MainSection'
import Header from '../nav/Header'
import OurPrograms from './OurPrograms'
import Footer from '../nav/Footer'
import EndSection from './EndSection'
import { PAGE_IDS } from '../nav/MainMenuLinks'
import Image from 'next/image'

const links = [
  {
    label:'NAV_About',
    href:'/#aboutus',
  },
  {
    label:'NAV_Programs',
    href:'/ourprograms',
    active:true,
  },
  {
    label:'NAV_Experts',
    href:'/ourexperts',
  },
  {
    label:'NAV_Gallery',
    href:'/ourprograms/#footer_gallery',
  },
  {
    label:'NAV_Partners',
    href:'/#ourpartners',
  },
  {
    label:'NAV_Contact',
    href:'/ourprograms/#footer_contactus',
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

const OurProgramsPageComponent = () => {
  return (
    <div className='flex flex-col w-full h-full overflow-x-hidden scroll-smooth'>
      <div className='flex flex-col w-full h-full mt-3'>
        <Header pageLabel="ourprograms" links={links}/>
        <MainSection />
        <OurPrograms />
        <EndSection />
        <Footer />
      </div>
    </div>
  )
}

export default OurProgramsPageComponent
import React, { useRef } from 'react'
import MainSection from './MainSection'
import AboutUsSection from './AboutUsSection'
import Header from '../nav/Header'
import WhatWeOfferSection from './WhatWeOfferSection'
import FAQSection from './FAQSection'
import OurPrograms from './OurPrograms'
import WhyTherapediaSection from './WhyTherapediaSection'
import OurStaff from './OurStaff'
import OurCoreValues from './OurCoreValues'
import TherapediaShop from './TherapediaShop'
import StatSection from './StatSection'
import OurPartners from './OurPartners'
import Testimonials from './Testimonials'
import Footer from '../nav/Footer'
import Gallery from './Gallery'
import Image from 'next/image'
import FooterMapImage from '../nav/FooterMapImage'

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
  },
  {
    label:'NAV_Gallery',
    href:'/#footer_gallery',
  },
  {
    label:'NAV_Partners',
    href:'/#ourpartners',
  },
  {
    label:'NAV_Contact',
    href:'/#footer_contactus',
  },
  {
    href:'/#shop',
    children:(<Image
      src="/images/shoplogo-orange-cropped.svg"
      alt="Therapedia logo"
      width={150}
      height={0}  
      // className='border'
      
      />)
  }
]

const HomePageComponent = () => {
  return (
      <div className='flex flex-col w-full h-full overflow-x-hidden scroll-smooth'>
        <Header pageLabel="home" links={links} />
        <MainSection />
        <AboutUsSection />
        <OurPrograms />
        <WhatWeOfferSection />
        <WhyTherapediaSection />
        <OurCoreValues/>
        <OurStaff/>
        <Gallery/>
        <TherapediaShop/>
        <StatSection/>

        <div className='px-[30px] md:px-[200px] lg:px-[250px] py-10 flex flex-col lg:flex-row  w-full h-full gap-10'>
            <Testimonials/>
            <FAQSection/>
        </div>
        <OurPartners/>
        <Footer />
        <FooterMapImage/>
    </div>
  )
}

export default HomePageComponent
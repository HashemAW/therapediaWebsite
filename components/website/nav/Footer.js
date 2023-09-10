import React from 'react'
import Image from 'next/image'
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai'
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import i18nextConfig from '../../../next-i18next.config'
import { FooterLinks } from './FooterLinks';
import { ContactUs } from './ContactUs';
import { Gallery } from './Gallery';

const Footer = () => {


  return (
    <div className='px-[30px] md:px-[200px] lg:px-[250px] py-10 flex flex-col w-full text-[black] font-como' id='footer'>
      <Fade bottom>
          <div className='w-full flex lg:flex-row flex-col justify-center items-start gap-20'>
            <div className='w-full flex flex-col w-1/4 gap-5 gap-5'>
              <div className='w-full h-1  bg-blue'></div>
                <Image
                src="/images/logo-03-cropped.svg"
                alt="Therapedia Logo"
                width={150}
                height={0}/>
                <span className='font-como-medium text-sm break-all text-wrap'>kjfdslfjsdklfjsdlfjsldfjsldkfjsldkfjsldfjsdlfjsldkfjsdlkfjsldfjsldkfjsldkfjsldfjsldf</span>
                <div className='flex flex-row gap-2'>
                  <AiOutlineInstagram className='text-3xl p-1 text-blue shadow-md rounded-full '/>
                  <AiOutlineWhatsApp className='text-3xl p-1 text-blue shadow-md rounded-full '/>
                </div>
            </div>
            <FooterLinks />
            <ContactUs />
            <Gallery />

          </div>
       
      </Fade>
      
    </div>
  )


}

export default Footer




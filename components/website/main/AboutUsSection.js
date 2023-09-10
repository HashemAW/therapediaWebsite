import Image from 'next/image'
import React, { useState } from 'react'
import Fade from 'react-reveal/Fade';
import aboutUsImage from '../../../public/images/masked/1-01-new.png'

const aboutus_p1 = 'Therapedia Oman is a highly specialised paediatric rehabilitation centre that provides comprehensive services for children with physical, developmental, and cognitive challenges.'
const aboutus_p2 = 'At Therapedia Oman, we believe that early intervention is key to success, and we work closely with families to create a supportive and nurturing environment that promotes progress and growth.'
const aboutus_p3 = "Our experts work collaboratively to provide a holistic treatment plan that addresses all aspects of a child's development, from motor skills and language development to socialization and emotional well-being."

const AboutUsSection = () => {
  return (
    <div className='px-[30px] md:px-[200px] lg:pr-[100px] lg:pl-[250px] py-20 relative' id='aboutus'>
      <Fade bottom >
        <div className="absolute top-[10%]  left-[5%] lg:left-[100px]  flex justify-center items-center z-10 w-fit px-5 h-[70px] ">
          <Image src="/images/stars/stars-02.svg" alt="stars 01" width={150} height={0} />
        </div>
        <div className=' w-ful  flex  flex-col-reverse lg:flex-row flex justify-center items-center gap-10'>
          <div className='flex w-full lg:w-1/2  flex-col   justify-center items-start  h-auto  gap-5'>
            <h2 className="font-como-extrabold text-4xl text-start text-blue"> About us </h2>
            <p className="font-como-bold w-full break-word text-justify text-base text-grey-dark"> {aboutus_p1} </p>
            <p className="font-como-bold w-full break-word text-justify text-base text-grey-dark"> {aboutus_p2} </p>
            <p className="font-como-bold w-full break-word text-justify text-base text-grey-dark"> {aboutus_p3} </p>
          </div>
          <div className='flex relative w-full lg:w-1/2 items-center justify-center'>
            <Image alt='' src={aboutUsImage} unoptimized={true} width={600} height={600} className='object-contain'  />
            <div className="w-1/2 py-2 lg:py-7 absolute bottom-[30px]  left-[10%] lg:left-[30px]  flex justify-center items-center z-10  bg-[white] rounded-lg  shadow-image ">
                      <Image
                      
                        src="/images/logo-03-cropped.svg"
                        alt="Therapedia logo"
                        // width={0}
                        // height={0}
                        // className='w-[80%]'
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '80%', height: 'auto' }} 
                        />
              </div>
            </div>
        </div>
      </Fade>
    </div>
  )
}

export default AboutUsSection
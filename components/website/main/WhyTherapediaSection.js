import React, { useState } from 'react'
import Fade from 'react-reveal/Fade';
import Image from 'next/image';
import whyImage from '../../../public/images/masked/1-02.png'

const why_p1 = 'At Therapedia Oman, we are dedicated to providing the highest quality pediatric rehabilitation services to help children achieve their full potential.'
const why_p2 = 'With a team of highly skilled and compassionate professionals, state-of-the-art facilities, and a commitment to excellence, Therapedia Oman is the ideal choice for families seeking expert care for their children.'
const why_p3 = "We believe in the power of early intervention and work tirelessly to support children in all aspects of their development, from physical and cognitive skills to emotional well-being and socialization. At Therapedia Oman, we empower children to become confident, independent, and successful individuals who can thrive in all aspects of their lives."

const WhyTherapediaSection = () => {
  return (
    
    <div className='px-[30px] md:px-[200px] lg:pr-[100px] lg:pl-[250px] py-20' id='why'>
      <Fade bottom>
        <div className='flex w-full flex-col-reverse lg:flex-row flex justify-center items-start gap-10'>
          <div className='flex flex-col justify-center items-start  w-full h-auto  gap-5'>
            <h2 className="font-como-extrabold text-4xl text-start text-orange"> Why Therapedia? </h2>
            <p className="font-como-bold w-full text-justify text-base text-blue-dark"> {why_p1} </p>
            <p className="font-como-bold w-full  text-justify text-base text-blue-dark"> {why_p2} </p>
            <p className="font-como-bold w-full  text-justify text-base text-blue-dark"> {why_p3} </p>
          </div>
          <Image alt='' unoptimized={true} src={whyImage} width={450} height={450} className='object-contain' />
        </div>
      </Fade>
    </div>
  )
}




export default WhyTherapediaSection
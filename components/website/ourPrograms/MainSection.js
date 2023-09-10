import React from 'react'
import Fade from 'react-reveal/Fade';
import { MainSectionBackground } from '../../MainSectionBackground';

const subText = "Rehabilitation is a lifelong process that is shaped within the limits of each individual's needs, wishes and possibilities. Individual difference requires a special rehabilitation process for each individual. These requirements, in addition to achieving positive results in terms of efficiency, also bring some difficulties for the family or caregiver"
const MainSection = () => {
  return (
    <section className="" id='ourprograms-main'>
    <Fade bottom>
    <MainSectionBackground image={'programs-main-bg'} subImage={'/images/green boy-01.svg'} classes='xs:bg-cover sm:bg-cover md:bg-cover bg-cover py-20 '>
      <div className="w-full  grow h-full flex flex-col  items-center justify-center gap-2 lg:gap-10">
          <h2 className='w-full font-como-normal text-sm md:text-4xl  text-white text-center pb-2'>We created the programs to fit every kid</h2>
          <h2 className='w-full break-word font-como-extrabold uppercase text-base md:text-4xl  text-2xl lg:text-6xl   font-como-extrabold  text-white text-center'>Our Programs</h2>
          <span className='w-full md:w-1/2 px-3 break-word font-como-bold  text-xs md:text-xl  text-white text-start '>{subText}</span>
      </div>
    </MainSectionBackground>
      </Fade>
    </section>
  )
}

export default MainSection
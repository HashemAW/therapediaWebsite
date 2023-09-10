import React from 'react'
import Fade from 'react-reveal/Fade';
import { MainSectionBackground } from '../../MainSectionBackground';

const subText = "Rehabilitation is a lifelong process that is shaped within the limits of each individual's needs, wishes and possibilities. Individual difference requires a special rehabilitation process for each individual. These requirements, in addition to achieving positive results in terms of efficiency, also bring some difficulties for the family or caregiver"
const MainSection = () => {
  return (
    <section className="flex flex-col w-full h-full " id='ourstaff-main'
    classes='xs:bg-cover sm:bg-cover md:bg-cover py-20 '
    >
      <Fade bottom>
        <MainSectionBackground image={'experts-main-bg'} subImage={'/images/green boy-01.svg'}>
          <div className="w-full  grow h-full flex flex-col  items-center justify-center gap-2 lg:gap-10">
              <h2 className='w-full font-como-normal text-lg md:text-4xl  text-white text-center pb-2'>Together We Heal, Laugh and Shine,</h2>
              <h2 className='w-full break-word font-como-extrabold uppercase text-xl md:text-4xl lg:text-6xl   font-como-extrabold   text-white text-center'>Our Experts</h2>
              <span className='w-full md:w-1/2 px-3 break-word font-como-bold  text-xl md:text-4xl  text-white text-center '>Your Support Line</span>
          </div>
        </MainSectionBackground>
      </Fade>
    </section>
  )
}

export default MainSection
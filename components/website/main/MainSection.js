import Image from 'next/image';
import React from 'react'
import Fade from 'react-reveal/Fade';
import { MainSectionBackground } from '../../MainSectionBackground';


const MainSection = () => {
  return (
    <section className="" id='main'>
    <MainSectionBackground image={'main-bg'}>
      <Fade bottom>
        <div className="w-full  grow h-full flex flex-col  items-center justify-center">
          <h2 className='pb-5 font-como-normal text-lg md:text-2xl  text-white text-center text-center'>Welcome to TheraPedia</h2>
          <h2 className='pb-2 w-full break-word font-como-extrabold uppercase leading-none text-lg md:text-5xl line text-white text-center'>Where Love and</h2>
          <h2 className='w-full break-word font-como-extrabold uppercase leading-none text-lg md:text-5xl   text-white text-center'>healing meet</h2>
      </div>
      </Fade>
    </MainSectionBackground>

    </section>
  )
}





export default MainSection
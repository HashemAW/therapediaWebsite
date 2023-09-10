
import React from 'react'
import Fade from 'react-reveal/Fade';
import slides from '../../../utils/data/OurProgramsCarouselData'
import { ProgramsCarousel } from './ProgramsCarousel';





const OurPrograms = () => {
  return (
      <div className=' px[30px] md:px-[200px] lg:px-[250px] pt-10 pb-20 flex flex-col w-full h-full lg:h-full bg-[#ECE8E8] bg-bottom bg-cover bg-no-repeat bg-bottom bg-programs-carousel-bg' id='ourprograms'>
        <Fade bottom>
          <div className='flex flex-col justify-center w-full gap-8'>
            <div className='w-full flex flex-col justify-content content-center items-center gap-4'>
              <h2 className="font-como-normal   text-center text-lg text-red"> We are here to help </h2>
              <h2 className="font-como-extrabold  text-center text-4xl  text-orange"> Our Services </h2>
            </div>
            <div className='flex w-full h-full justify-between items-center '>
              <ProgramsCarousel items={slides}/>
            </div>
          </div>
      </Fade>
    </div>
  )
}


export default OurPrograms
import React from 'react'
import Fade from 'react-reveal/Fade';
import Link from '../../Link';

const EndSection = () => {
  return (
    <section className="" id='end'>
      <Fade bottom>
      <div className='flex w-full px-[30px] md:px-[200px] lg:px-[300px] py-20 flex-col justify-center items-center bg-blue gap-5'>
          <h2 className='w-full break-word font-como-extrabold  text-2xl lg:text-4xl  text-white text-center'>We welcome your questions and concerns </h2>
          <h2 className='w-full break-word font-como-extrabold  text-2xl lg:text-4xl  text-white text-center'>Contact Us for more information </h2>
          <Link 
            href="mailto:info@therapediaoman.com"
            className='w-fit font-como-normal text-md bg-pink text-white flex items-center rounded-full py-3 px-6 lg:text-lg xlg:py-3 xlg:px-8'>
            contact us
          </Link>
        {/* </div> */}
      </div>
      </Fade>
    </section>
  )
}

export default EndSection
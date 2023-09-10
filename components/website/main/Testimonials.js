import React  from 'react'
import Icon from '@mdi/react';
import { mdiStarFourPointsOutline } from '@mdi/js';
import { TestimonialsCaresoul } from './TestimonialsCaresoul';

  

const Testimonials = () => {
  return (
    <div id='testimonials' className='flex w-full h-full lg:w-1/2 flex-col text-dark-green flex justify-start items-center'> 
      <div className='flex w-full   h-full flex-row gap-3 items-start'>
        <Icon path={mdiStarFourPointsOutline} size={1} className=' text-blue'/>
        <h2 className='text-[1rem]  font-como-bold  capitalize mb-4 text-blue-dark '> Testimonials </h2>
      </div>
      <div className='flex flex-col w-full h-full justify-between gap-2'>
        <h3 className='font-como-bold text-3xl text-blue-dark'> Happy Parents Say </h3>
        <TestimonialsCaresoul/>
      </div>
    </div>
  )
}




export default Testimonials
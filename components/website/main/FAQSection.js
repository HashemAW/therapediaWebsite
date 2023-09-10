import React, { useState } from 'react'
import Fade from 'react-reveal/Fade';
import accordionData from '../../../utils/data/FAQData';
import { mdiStarFourPointsOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { AccordionItem } from './AccordionItem';

const FAQSection = () => {

  const [open, setOpen] = useState(false)

  const toggle = (index) => {
    if(open === index) {
      return setOpen(null)
    }
    setOpen(index)
  }

  return (
      <div id='faqs' className='flex w-full h-full lg:w-1/2  flex-col text-dark-green flex justify-between items-center  '>

      <div className='flex w-full  flex-row gap-3 items-start '>
        <Icon path={mdiStarFourPointsOutline } size={1} className=' text-blue'/>
        <h2 className=' text-base font-como-bold capitalize mb-4 text-blue-dark '> {"Faq's"} </h2>
      </div>

      <div className='flex w-full flex-col justify-between gap-10'>
        <h3 className='font-como-bold text-3xl text-blue-dark '> Frequently Asked Questions </h3>
        <div className='flex flex-col gap-2'>
          {accordionData.map((data, index) => {
            return (
                <div key={'faqs'+index} className={`border border-${data.borderColor} rounded-xl`}>
                  <AccordionItem
                            key={index}
                            open={index === open}
                            title={data.title}
                            desc={data.description}
                            toggle={() => toggle(index)}
                            />
                </div>
            )
          })}
        </div>
      </div>
      </div>
  )
}

export default FAQSection
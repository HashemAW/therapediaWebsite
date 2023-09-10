import React from 'react'
import Image from 'next/image'
import Fade from 'react-reveal/Fade';
import items  from '../../../utils/data/CoreValueData';

let width = 150
const OurCoreValues = () => {
  return (
    <div className='px-px-[28px] md:px-[198px] lg:px-[248px] pb-32 pt-20 flex flex-col justify-center items-center w-full h-min-screen  bg-cover bg-no-repeat bg-bottom bg-corevalues-bg' id='corevalues'>
      <Fade bottom>
          <h2 className='font-como-normal capitalize mb-1 text-start text-white text-lg'> Why Choose Us</h2>  
          <h2 className='font-como-extrabold capitalize mb-6 text-start text-white text-4xl'> Our Core Values</h2>
          <div className='flex flex-row w-full h-full justify-evenly items-stretch flex-wrap gap-x-2 gap-y-10'>
            {items.map((item) => {
              return (
                <div  key={'ourcorevalues'+item.title} className='w-1/3 lg:w-1/5 flex'>
                  <ValueCard item={item}/>
                </div>
              )
            })}
     
          </div>
      </Fade>
    </div>
  )
}

export default OurCoreValues

function ValueCard({item}) {
  return (
    <div className=' p-5 flex flex-col items-center justify-center bg-white rounded-lg gap-2'>
      <div className={`flex border rounded-full w-[45px] h-[45px] bg-${item.bgColor} items-center justify-center`}>
        <Image alt={item.title} src={item.image} width={25} height={25} className="aspect-square object-cover" style={{ flex: true, objectFit: 'cover', overflow: 'hidden' }} />
      </div>
      <span className={`font-como-bold text-base  text-center text-${item.color}`}> {item.title}</span>
      <span className='font-como-normal text-sm  text-wrap text-center'> {item.description}</span>
    </div>
  );
}

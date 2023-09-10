import React from 'react'
import Image from 'next/image'
import Fade from 'react-reveal/Fade';
import items from '../../../utils/data/StatData'

const StatSection = () => {
  return (
    <div className='px-[30px] md:px-[200px] lg:px-[250px] py-10 w-full text-dark-green bg-blue flex  relative' id='stats'>
      <Fade right>
        <div className="absolute top-0  -left-10 lg:left-24  flex justify-center items-center z-10 w-fit">
              <Image src="/images/stars/stars-04-white.svg" alt="stars 01" width={250} height={0} />
        </div>
        <div className="absolute -top-12 mt-4  lg:mt-0 right-0  lg:right-16  flex justify-center items-center z-10 w-fit ">
              <Image src="/images/stars/whiteStar-01.svg" alt="stars 01" width={200} height={0}  />
        </div>
          <div className='flex flex-col lg:flex-row w-full justify-center items-center gap-10 lg:gap-36 flex-wrap gap-2 flex-wrap pt-48 lg:py-10'>
            {items.map((item, index) => {
              return (
                <div key={'stats'+index}  className='flex flex-col justify-center items-center gap-5'>
                      <Image
                      src={item.image}
                      alt={item.title}
                      width={70}
                      height={70}
                      className="aspect-square object-cover"
                      style={{flex:true, objectFit:'cover', overflow:'hidden'}}
                      />
                    <span className='font-como-bold text-xl  text-white text-wrap text-center'> {item.title}</span>
                    <span className='font-como-normal text-base   text-white text-center uppercase'> {item.subtitle}</span>
                </div>
              )
            })}
          </div>
      </Fade>
    </div>
  )
}

export default StatSection
import React from 'react'
import Image from 'next/image'
import Fade from 'react-reveal/Fade';
import items from '../../../utils/data/WhatWeOfferData'



const WhatWeOfferSection = () => {
  return (
    <div className='w-full px-[30px] md:px-[200px] lg:px-[250px] py-48 relative' id='whatweoffer'>
      <Fade bottom>
        <div className="absolute top-[10%]  right-[10%] lg:right-[200px]  flex justify-center items-center z-10 w-fit px-5 h-[70px] ">
          <Image src="/images/stars/stars-02.svg" alt="stars 01" width={150} height={0} />
        </div>
        <div className=' flex flex-col w-full  justify-center items-center w-full gap-10'>
          <h2 className='font-como-extrabold  mb-4 text-start text-blue-dark text-4xl'> What We Offer</h2>
          <div className='flex flex-row w-full justify-between items-center gap-5 flex-wrap'>
            {items.map((item, index) => {
              return (
                <div key={'whatweoffer'+index}  className='flex flex-col justify-center items-center gap-5'>
                    <div className={`flex border rounded-full w-[100px] h-[100px] bg-${item.bgColor} items-center justify-center`}>
                      <Image
                      src={item.image}
                      alt={item.title}
                      width={50}
                      height={50}
                      className="aspect-square object-cover"
                      style={{flex:true, objectFit:'cover', overflow:'hidden'}}
                      />
                    </div>
                    <span className='font-como-bold text-sm  w-[100px] text-wrap text-center text-blue-dark'> {item.title}</span>
                </div>
              )
            })}
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default WhatWeOfferSection
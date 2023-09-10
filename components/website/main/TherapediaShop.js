/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react'
import Fade from 'react-reveal/Fade';
import items from '../.././../utils/data/ShopData'
import { ShopCarousel } from './ShopCarousel';



const shop_1 = 'dhgjkhakgdsfhaskdghaksghsdkgjhdsakgjhsadkjghkdsjghsdakgjhsdkgjhdsgjhsdkjghsdgalkhasgldkhsdgkhgasdlk'
const TherapediaShop = () => {
  return (
    <section className="px-[30px] md:px-[200px] lg:pr-[100px] lg:pl-[250px]  py-10 flex flex-col bg-shop-bg bg-no-repeat bg-cover bg-center bg-fixed" id='shop'>
      <Fade bottom>
        <div className='flex flex-col items-center justify-around lg:flex-row gap-10 '>
            <div className='flex flex-col w-full items-center justify-center lg:w-1/4 gap-5'> 
              <Image src="/images/shoplogo-white.svg" alt="Therapedia logo" width={200} height={170} />
              <span className='w-full break-all text-white font-como-normal'>{shop_1}</span>
              <button className='font-como-bold text-sm bg-white text-orange flex items-center rounded-full py-3 px-6 '>Visit Shop</button>
            </div>
            <ShopCarousel items={items.list}/>
        </div>
      </Fade>
    </section>
  )
}

export default TherapediaShop



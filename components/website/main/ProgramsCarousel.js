import React, { useEffect, useState } from 'react';
// import { FaAngleLeft, FaAngleRight} from 'react-icons/fa';
import {TfiAngleLeft, TfiAngleRight} from 'react-icons/tfi'
import {LiaAngleRightSolid, LiaAngleLeftSolid} from 'react-icons/lia'
import Image from 'next/image';
import Link from '../../Link';
import Carousel from 'react-multi-carousel';

const responsive = {

superLargeDesktop: {
  // the naming can be any, depends on you.
  breakpoint: { max: 4000, min: 3000 },
  items: 4,

  
  

},
desktop: {
  breakpoint: { max: 3000, min: 1024 },
  items: 4,

  
  
},
tablet: {
  breakpoint: { max: 1024, min: 464 },
  items: 1,

  
},
mobile: {
  breakpoint: { max: 464, min: 0 },
  items: 1,

  
}
};




export const ProgramsCarousel = ({ items }) => {
  const [activeArray, setActiveArray] = useState([...items.slice(0,5),{type:"last", id:'last'}])

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide, slidesToShow, totalItems } } = rest;
    return (
      <div className="carousel-button-group"> 
        <button  className='absolute top-[105%] md:top-[50%] right-[40%] md:-right-[8%]' onClick={()=>next()}><LiaAngleRightSolid className={`text-lg  md:text-xl lg:text-[50px] text-blue `} /></button>
        <button  className='absolute top-[105%] md:top-[50%] left-[40%] md:-left-[8%]'  onClick={()=>previous()}><LiaAngleLeftSolid className={`text-lg md:text-xl lg:text-[50px] text-blue `} /></button>

      </div>
    );
  };
  return (
      <Carousel   
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite={false}
          keyBoardControl={true}

          transitionDuration={500}
          focusOnSelect={true}
          containerClass="w-full h-full flex flex-row "


          customButtonGroup={<ButtonGroup />}
          renderButtonGroupOutside={true}
          rtl={false}
          arrows={false}
          itemClass="px-2 "
        >
          {activeArray.map((item, index) =>  (item?.type === 'last'?renderLastSlide():renderArray(index, item)))}
        </Carousel>
  );
};
function renderLastSlide(id) {
  console.log("render Last")
  return (
      <div key={"program_car_Last"}  className='flex flex-col w-full h-full p-5 items-center justify-center gap-3  bg-white gap-3  rounded-xl'>
            <Link href='/ourprograms/' 
            className={` break-all w-full px-4 py-1 font-como-bold text-4xl text-center text-green-dark `}
            >learn more</Link>
     </div>
    )
}

function renderArray(index, item) {
  return (
    <div key={"program_car_"+index} className='flex flex-col w-full h-full items-center justify-start  bg-white gap-1  rounded-3xl'>
      {item?.image && <Image alt={item.title} src={item?.image} width={0} height={0} className='object-cover  aspect-[3/2] rounded-t-3xl' sizes="100vw" style={{ width: '100%', maxHeightheight: '50px' }} />}
        <div className='flex flex-col w-full h-full p-2 items-center justify-center gap-1'>
            <span className={`w-full break-word text-center text-${item?.color}  text-base  font-como-bold break-word`}>{item?.title}</span>
            <span className={`w-full break-word text-center text-${item?.color}  text-sm  font-como-bold break-word`}>{item?.subtitle||"  "}</span>
            <div className='w-full h-2/3 flex flex-col overflow-hidden'>
              <span className='max-h-full break-word font-como-normal text-sm line-clamp-5  text-center text-black'>{item?.description}</span>
            </div>
            <Link href={`/ourprograms/#${item?.id}`} className={`break-all w-fit px-4 py-2 font-como-bold text-center text-sm text-[white] bg-${item?.color} rounded-full`}>Learn more</Link>
        </div>
    </div>)
}

import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Icon from '@mdi/react';
import { mdiStarFourPoints } from '@mdi/js';
import items from '../../../utils/data/TestimonialsData';
import Carousel from 'react-multi-carousel';


 const responsive = {

  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  
    
    
  
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  
    
    
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


export const TestimonialsCaresoul = ({ }) => {

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide, slidesToShow, totalItems } } = rest;
    return (
      <div className='flex flex-row justify-center items-center'>
        <button onClick={previous} className=" "> <FaAngleLeft className='text-[20px] lg:text-[30px]' /></button>
        <button className="" onClick={next}><FaAngleRight className='text-[20px] lg:text-[30px]' /></button>
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
      rewind={true}
      keyBoardControl={true}

      transitionDuration={500}
      focusOnSelect={true}
      containerClass="flex  flex-col w-full"


      customButtonGroup={<ButtonGroup />}
      // renderButtonGroupOutside={true}
      partialVisible={false}
      centerMode={false}
      rtl={false}


      arrows={false}



      itemClass="px-5"



    >
      {items.map((item, index) => (renderArray(index, item)))}
    </Carousel>

  );
};

function renderArray(index, item) {
  const drawStars = (num) => {
    let stars = [];
    for (let i = 0; i < num; i++) {
      stars.push(<Icon key={'stars' + i} path={mdiStarFourPoints} size={0.5} className=' text-orange' />);
    }
    return <div className='flex flex-row'>{stars}</div>;
  };
  return (
    // <div key={'testimonial' + index} className='flex flex-col'>
      <div key={'testimonial' + index} className='flex flex-col border bg-light-grey rounded-xl p-5 gap-2'>
        <div className='flex flex-row gap-1 flex-wrap'>
          <span className='font-como-bold text-sm text-pink text-wrap text-start'>{item.title}</span>
          <span className='font-como-normal text-sm  text-blue-dark text-wrap text-start'>/</span>
          <span className='font-como-normal text-sm  text-blue-dark text-wrap text-start'>{item.subtitle}</span>
        </div>
        {drawStars(item.metadata?.stars)}
        <span className='font-como-normal text-sm  text-blue-dark text-wrap text-start break-all'>{item.description}</span>
      </div>
    // </div>
  );
}

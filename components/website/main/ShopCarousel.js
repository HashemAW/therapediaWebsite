import React from 'react';
import { BackgroundCircle } from './BackgroundCircle';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import Carousel from 'react-multi-carousel';


const responsive = {

  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  
    
    
  
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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
  
  
  
  
  export const ShopCarousel = ({ items }) => {
    // const [activeArray, setActiveArray] = useState([...items.slice(0,5),{type:"last", id:'last'}])
  
    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
      const { carouselState: { currentSlide, slidesToShow, totalItems } } = rest;
      return (
        <div className="flex w-full flex-row justify-end gap-4 items-center"
        // carousel-button-group"
        > 
          {/* <button  className='absolute top-[50%] right-[10%]' onClick={()=>next()}><FaAngleRight className={`text-xl md:text-4xl lg:text-6xl text-blue `} /></button> */}
          {/* <button  className='absolute top-[50%] left-[10%]'  onClick={()=>previous()}><FaAngleLeft className={`text-xl md:text-4xl lg:text-6xl text-blue `} /></button> */}
          <button onClick={previous} className=""> <HiOutlineChevronLeft size={'30px'} className='p-[4px] text-grey bg-white rounded-full' /></button>
          <button className="" onClick={next}><HiOutlineChevronRight size={'30px'} className='p-[4px] text-grey bg-white rounded-full' /></button>
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
            containerClass="flex w-full flex-col  justify-center gap-5 items-center"//w-full h-full flex flex-row "
  
  
            customButtonGroup={<ButtonGroup />}
            // renderButtonGroupOutside={true}
  
  
            
            
            rtl={false}
  
  
            arrows={false}
  
  
            
            itemClass="px-5 "
  
  
  
          >
            {items.map((item, index) =>  (renderArray(index, item)))}
          </Carousel>
    
    );
  };



function renderArray(index, item) {
  return (
    <div key={'shopitems'+index}  className='flex px-8 py-10 bg-white flex-col items-center gap-3 w-full rounded-xl '> 
    <div className={`flex relative`}>
      <BackgroundCircle item={item} size={"33px"} top={"5px"} left={"10px"}/>
      <svg className={`w-[33px] h-[40px]`} >
          <use  href={`${item.image}#${item.id}`}
          style={{
            fill: item.color,
            stroke: item.color,
          }}
          ></use>
      </svg>
      
    </div>

  <span className='flex text-base xl:text-lg shrink ahrink-1 h-[70px] font-como-bold text-blue-dark text-center'>{item.title}</span>
  <span className='font-como-normal text-base  text-black break-all text-center'>{item.description}</span>

  </div>);
}

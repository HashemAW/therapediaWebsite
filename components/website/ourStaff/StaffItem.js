import React from 'react';
import { VscCircleLargeFilled } from 'react-icons/vsc';
import Image from 'next/image';

export default function StaffItem({ item, index }) {

  const reverse = item?.metadata?.direction === 'reverse';


  return (
    <div className='flex flex-col w-full h-full items-center justify-center py-3  gap-4 '>
      <div id={item?.id} className={`flex w-full lg:w-3/4 items-center  ${reverse ? 'flex-col-reverse lg:flex-row-reverse' : 'flex-col-reverse lg:flex-row'}   gap-5 rounded-xl justify-between `}>
        {
            item.image.length > 0 &&
            <div className='flex w-3/4 lg:w-1/2 items-center justify-center realtive pb-10 lg:pb-0'>
               <Image
                src={item?.image}
                // width={350}
                // height={350}
                className='object-contain' 
                alt={item?.title}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }} 
          />
            </div>
        }
        <div className='w-full lg:w-1/2 flex flex-col gap-2 relative  px-3 lg:px-10'>
          <span className={`w-full break-word text-start text-justify text-${item?.color} font-como-extrabold text-3xl lg:text-4xl break-word`}>{item?.title}</span>
          <span className={`w-full break-word text-start text-justify text-black font-como-bold text-2xl lg:text-3xl break-word`}>{item?.subtitle}</span>
          {item?.metadata?.timeline && <TimeLine items={item?.metadata?.timeline}/>}
        </div>
      </div>

      <div className='w-full lg:w-3/4 flex flex-col gap-10 items-center justify-center px-3'>
          <span className={`flex flex-col w-full font-como-heavy text-2xl lg:text-3xl text-center text-${item?.color} bg-grey-01 p-2 lg:p-4 rounded-xl`}>Professional Qualifications, Trainings;</span>
        {item?.metadata?.list?.length > 0 && <QualificationList items={item?.metadata?.list}/>}
      </div>
      <div className='w-screen h-[100px] bg-wavy-dashed-divider-bg bg-no-repeat bg-cover  mt-10'/>

    </div>
  );
}


function TimeLine({items}) {
  const renderTimeLine = (item, index) => (

    <div key={item?.title+index}class="flex flex-row"> 
      <div className="mr-10 md:mx-auto relative">
        <div className="h-full w-4 flex items-center justify-center">
          <div className="h-full w-[2px] bg-grey pointer-events-none"></div>
        </div>
        <div className="w-4 h-4 absolute top-0 mt-4 rounded-full bg-black shadow text-center">
          <i className="fas fa-check-circle text-black"></i>
        </div>
      </div>
      <div className="bg-white md:px-2 lg:px-4 py-2 rounded-xl my-0 mr-auto  w-full">
        <h3 className="font-como-bold text-lg mb-0 text-black">{item?.title}</h3>
        <h3 className="font-como-light text-lg mb-0 text-black">{item?.description}</h3>
      </div>
      </div>
)
  return (
    <div className="flex flex-col ">
      {items.map(renderTimeLine)}
  </div>
  )
}


function QualificationList({items}) {
  return (
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-2 items-start justify-start'>
        {items.filter((e,i)=>(i < (items.length))).map((e) => (
            <div key={e} className='flex flex-row gap-5  items-center justify-start'>
              <VscCircleLargeFilled className='text-base' />
              <span className={`w-11/12 text-black text-lg font-como-bold break-word`}>{e}</span>
            </div>
          ))}
        </div>
  )
}
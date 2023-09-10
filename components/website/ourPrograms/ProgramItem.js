import React from 'react';
import Image from 'next/image';
import ProgramDiagram from './ProgramDiagram';
import { ProgramList } from './ProgramList';

export default function ProgramItem({ item, index }) {


  const makeTextBackground = (index) => {
    let count = index + 1;
    var str = ("0" + count).slice(-2);
        return str;
  }

  const reverse = item?.metadata?.direction === 'reverse';

  return (
    <div id={item?.id} className={`flex w-full items-center relative  ${reverse ? 'flex-col-reverse lg:flex-row-reverse' : 'flex-col-reverse lg:flex-row'}   gap-5 py-3 rounded-xl justify-between `}>


        {item?.image &&
          <div className='flex w-3/4 lg:w-1/2 items-center justify-center'>
            <Image
            src={item.image}
            // width={350}
            // height={350}
            alt={`Image for ${item?.title}`}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} 
            // className='object-contain' 
            />
          </div>
        }

        {item?.metadata?.list?.length > 0 && 
          <div className='w-full lg:w-1/2 flex flex-col lg:flex-row'>
            <ProgramList list={item?.metadata?.list} color={item?.color}/>
          </div>
        }
        {item?.metadata?.graph && 
          <div className='flex w-full lg:w-1/2 items-center justify-center'>
            <ProgramDiagram graph={item?.metadata?.graph}/>
          </div>
        }

        {item?.metadata?.decoration && item?.metadata?.decoration}


      <div className='w-full lg:w-1/2 flex flex-col gap-2 relative'>
        <div className='font-como-extrabold text-[120px]  text-grey-02 z-[-10] absolute -bottom-[50px] left-0 lg:-left-[10px]'>
          {makeTextBackground(index)}
        </div>
        <span className={`w-full break-word text-start text-justify text-${item?.color} font-como-heavy text-3xl break-word`}>{item?.title}</span>
        <span className={`w-full break-word text-start text-justify text-${item?.color} font-como-extrabold text-xl break-word`}>{item?.subtitle}</span>
        <span className={`w-full break-word text-start text-justify text-${item?.color} font-como-bold break-word`}>{item?.description}</span>
      </div>


    </div>
  );
}


import React from 'react'
import Image from 'next/image'
import Fade from 'react-reveal/Fade';
import items from '../../../utils/data/OurPartnersData'
import LineSeperator from '../../LineSeperator';

function OurPartners() {
  return (
    <div className='px-[30px] md:px-[200px] lg:px-[250px] pt-32 pb-20 w-full' id='ourpartners'>
      <Fade bottom>
        <div className=' flex flex-col lg:flex-row justify-center items-center w-full gap-5 '>
          <div className='flex flex-col w-full lg:w-1/2 gap-5 flex-wrap justify-center items-center'>
            <h2 className='w-full font-como-extrabold uppercase text-center text-green text-4xl text-pink capitalize'> Our Partners</h2>
            <span className='w-full font-como-medium text-sm  break-all text-wrap text-start'>sdfhksjdg jdskg sdkjgh sjksd gsdkjhgds k jfksdgj kldjgldkfgj fkdlg kldjg dfgl klfj dlkf</span>
          </div>
          <div className='flex  flex-row w-full justify-around items-center gap-5 flex-wrap gap-2 flex-wrap'>
            {items.map((item, index) => {
            return (
              <div key={'ourpartners'+index}  className='flex flex-col justify-center items-center gap-5'>
                <Image
                  src={item.image}
                  alt=''
                  width={100}
                  height={50}
                  className="object-contain" />
                </div>
            );
            })}
          </div>
        </div>
        {/* <div className='w-full h-[2px] mx-30 bg-light-grey'></div> */}
        <div className='w-full h-[2px]  hidden lg:flex bg-grey-light my-12'></div>

      </Fade>
    </div>);
}
export default OurPartners

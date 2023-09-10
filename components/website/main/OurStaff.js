
import React from 'react'
import Fade from 'react-reveal/Fade';
import slides from '../../../utils/data/OurStaffData'
import Image from 'next/image';
import Link from '../../Link';
const ourStaff_1 = 'Our team firmly believes in the power of play and creativity as vital components of the healing and rehabilitation process. We strive to create a warm and welcoming environment where children can feel safe, encouraged, and empowered to explore their abilities and overcome obstacles. With a focus on evidence-based practices and the latest advancements in pediatric therapy, we tailor individualized treatment plans that are both effective and enjoyable for our young patients.'
const OurStaff = () => {
  return (
      <div className=' flex flex-col w-full px-[30px] md:px-[200px] lg:px-[250px] pb-[250px] pt-20 relative gap-20' id='ourstaff'>
        <Fade bottom className=''>
            <div className='flex justify-center w-full gap-3'>
              <div className='flex flex-col justify-content content-center items-center gap-5'>
                <h2 className="font-como-normal  text-center text-2xl text-grey"> Meet the Team </h2>
                <h2 className="font-como-extrabold  text-center text-4xl  text-green-dark"> Our Experts </h2>
                <span className="w-full font-como-bold  text-center text-xl  text-grey-03">{ourStaff_1}</span>
              </div>
            </div>

            <div className='flex w-full justify-center gap-24 items-center relative '>
              {slides.list.map((item, index) => (
                      <Link href={`/ourexperts/#${item?.id}`} key={'staff'+index}  className='flex flex-col justify-center items-center gap-5 cursor-pointer'>
                        <div className={`flex border rounded-full w-[100px] h-[100px] bg-blue items-center justify-center`}/>
                        <span className='font-como-heavy text-lg   text-wrap text-center text-red'> {item.title}</span>
                        <span className='font-como-normal text-lg   text-wrap text-center text-red'> {item.subtitle}</span>
                      </Link>
              ))}
            </div>

            <div className='absolute bottom-0 left-0 w-full h-[100px] bg-wavy-dashed-divider-bg bg-no-repeat bg-cover '>
              <div className="absolute bottom-12 lg:bottom-8 -left-16 lg:-left-28 flex flex-col justify-center items-start  z-10 w-full ">
                <Image
                    src="/images/blueboyColoredStars.svg"
                    alt="stars 01"
                    width={500}
                    height={500} 
                    className='-scale-x-100 object-contain  w-[200px] h-auto lg:w-[400px] object-right-top  '
                />
              </div>
            </div>
      </Fade>
    </div>
  )
}




export default OurStaff
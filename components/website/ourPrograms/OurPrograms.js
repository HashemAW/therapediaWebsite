
import React, { useEffect, useState }  from 'react'
import Fade from 'react-reveal/Fade';
import slides from '../../../utils/data/OurProgramsData'
import ProgramItem  from './ProgramItem.js';
import Image from 'next/image';



const OurPrograms = () => {
  const [programs, setPrograms] = useState(slides)
  useEffect(() => {
    setPrograms(slides)
  }, [slides])
  return (
      <div className='flex flex-col w-full py-20 px-[30px] md:px-[200px] lg:px-[300px] relative' >
        <Fade bottom>
            <div className='flex flex-col justify-center items-center'>
               {programs.map((item, index) => (<ProgramItem key={"programpage"+ item.title + index} item={item} index={index} />))}
            </div>
      
   
      </Fade>
    </div>
  )
}


export default OurPrograms
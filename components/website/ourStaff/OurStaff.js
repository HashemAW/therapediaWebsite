
import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade';
import slides from '../../../utils/data/OurStaffData'
import StaffItem from './StaffItem';



const OurStaff = () => {
  const [experts, setExperts] = useState(slides)
  useEffect(() => {
    setExperts(slides)
  }, [slides])

  return (
      <div className='flex flex-col w-full py-20 px-[30px] md:px-[200px] lg:px-[300px]' >
        <Fade bottom>
            <div className='w-full flex flex-col justify-center items-center '>
              {experts.list.map((item, index) => (<StaffItem key={"staffpage"+item.title+index} item={item} index={index} />))}
            </div>
      </Fade>
    </div>
  )
}




export default OurStaff
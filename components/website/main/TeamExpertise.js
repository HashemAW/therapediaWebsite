import React from 'react'
import Fade from 'react-reveal/Fade';
import list from '../../../utils/data/TeamExpertiseData'



const TeamExpertise = () => {
  return (
    <div className='flex w-full mt-16 lg:mt-20 mb-40 p-2 lg:p-10' id='teamexpertise'>
      <Fade bottom>
        <div className='flec flex-col lg:flex-row w-full text-dark-green flex justify-between items-center gap-5 '>
          <div className='flex flex-col justify-center items-start lg:w-1/4  gap-5'>
            <h2 className="font-como-extrabold text-2xl  text-start text-dark-green-60"> Team Expertise </h2>
          </div>
          <div className='flex flex-row justify-between items-start w-full lg:w-3/4  gap-5 flex-wrap'>
          {
            list.map((item, index) => (
              <h2 key={'expertise'+index} className='font-como-bold  text-orange bg-light-grey px-5 py-1 rounded-lg w-full lg:w-2/5'>{item.title}</h2>
            ))
          }
          </div>




        </div>



      </Fade>
    </div>
  )
}

export default TeamExpertise

import React from 'react'
import Fade from 'react-reveal/Fade';
import slides from '../../../utils/data/OurStaffData'

// import YoutubeEmbed from "../../YoutubeEmbed";
import Image from 'next/image';



const Gallery = () => {
  console.log({slides})

  return (
      <div className='flex flex-col px-[30px] md:px-[200px] lg:px-[250px] py-10' id='gallery'>
        <Fade bottom>
            <h2 className="font-como-extrabold  text-center text-4xl  text-pink"> Gallery</h2>
            {/* <YoutubeEmbed/> */}
      </Fade>
    </div>
  )
}




export default Gallery
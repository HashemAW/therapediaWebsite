import React from 'react';
import { SocialMediaIcons } from './SocialMediaIcons';
    // pt-16 
    // md:pt-48  pb-8 md:pb-32 

export function MainSectionBackground({ image, children, classes=''  }) {
  return (
    <div className={`flex flex-col w-full  h-fit  min-h-[30vh] md:min-h-screen bg-${image} gap-3 justify-start md:justify-center items-start md:items-center bg-cover bg-local  bg-no-repeat	bg-top  relative ${classes}`} >
      <SocialMediaIcons 
        classes='absolute  z-top  top-[9.5%] lg:top-[10%]  xl:top-[9.5%] w-11/12 hidden lg:flex flex-row items-center justify-between'
        subclasses='w-full md:w-1/3  flex flex-row gap-2   items-center justify-center'/>
        {children}
    </div>
  );
}

import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'

export default function MaskedImage({mask, image, width, height, decorationFrameProps,decorationStarsProps, ...other}) {
    const imageRef = useRef();

    return (
        <div className='flex  items-center justify-center  relative'>
        <Image
        ref={imageRef}
        alt=''
        style={{  
            maskImage:`url(${mask})`,
            maskRepeat:'no-repeat',
            WebkitMaskRepeat:'no-repeat',
            WebkitMaskImage:`url(${mask})`,
            maskSize:'cover',
            WebkitMaskSize:'cover',
            maskedImageBoxWidth:width,
            WebkitMaskBoxImageWidth:width,
            
        }}
        src={image}
        // className='object-cover' 

        width={width}
        height={0}
        {...other}
        />
{/*  
        {
          decorationFrameProps?.image && 
            <div className={'absolute z-top  ' + decorationFrameProps.classNames}>
                       <Image
                            src={decorationFrameProps.image}
                            // mask={item?.maskImage}
                            width={imageRef.current?.width?imageRef.current?.width+decorationFrameProps.sizeModifier:width}
                            height={0}
                            className='' 
                            alt={" -Program image frame"}
                            />
            </div>
          } 

          {
          decorationStarsProps?.image && 
            <div className={'absolute z-top  ' + decorationStarsProps.classNames}>
                       <Image

                            src={decorationStarsProps.image}
                            // mask={item?.maskImage}
                            width={decorationStarsProps.width}
                            height={decorationStarsProps.height}
                            className=' object-fill' 
                            // sizes="25vw"
                            alt={" -Program image frame"}
                            // style={{ width: '25%'}} 
                            />
            </div>
          } */}

          </div>

    )
}
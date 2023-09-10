import React from 'react'

export default function LineSeperator ({thickness=1, color='black', pad_y=3}) 
{
    return (<div className={`my-3 h-[4px] w-full bg-black `} />)

    // return (<div className={`my-${pad_y} h-[${thickness}px] w-full bg-[${color}] border-[${thickness}px]`} />)
}

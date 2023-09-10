import React, { useState } from 'react'



const ProgramDiagram = ({
    graph
}) => {
  return (
    <div className={`w-full lg:w-10/12 grid grid-rows-2 `}>
        <div className={`row-span-1 grid grid-cols-5 grid-rows-4 gap-1 place-content-center`}>
            <div className={`col-start-1 col-end-3 row-start-2 row-end-4 border-t-4 border-r-4 border-b-0 border-l-4 border-${graph.bgColor} ml-[20%] `}> </div>
            <div className={`col-start-3 col-end-4 row-start-1 row-end-3 p-3 bg-${graph.bgColor} rounded-lg flex flex-col items-center justify-center`}> <span className={`w-full font-como-bold  text-xs md:text-base text-center text-${graph.color}`}>{graph.label}</span> </div>
            <div className={`col-start-4 col-end-6 row-start-2 row-end-4 border-t-4 border-r-4 border-b-0 border-l-4 border-${graph.bgColor}  mr-[20%] `}> </div>
        </div>
        <div className={`row-span-1 grid grid-cols-4 gap-1 place-content-center   `}>
          {graph.children.map((child, index) => (
            <div key={'ProgramDiagram' + index} className={`p-1 lg:p-3 col-span-1 col-start-${index+1}   bg-${child.bgColor} rounded-lg flex flex-col items-center justify-center`}> <span className={`w-full text-center text-xs md:text-base  font-como-bold text-${child.color} break-word`}>{child.label}</span></div>
          ))}
        </div>
        
    </div>
  )
}

export default ProgramDiagram
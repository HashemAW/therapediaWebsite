import React from 'react';

export function BackgroundCircle({ item, top, left, size }) {
  return (
    <div className={`absolute `}
    style={{
      backgroundColor:item.color,
      width:size,
      height:size,
      top: top,
      left:left,
      borderRadius:'37% 31% 59% 41% / 68% 37% 63% 30%',
      opacity:0.4,
    }}
  >

  </div>);
}

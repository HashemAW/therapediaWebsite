import React from 'react';
import Image from 'next/image';

export function SocialMediaIcon({ image, bgColor, alt }) {
  return (
    <Image
      className={`fit-cover  w-[8%] lg:w-[8%] h-auto aspect-square p-[2%] rounded-full bg-${bgColor}`}
      src={image}
      alt={alt}
      width={0}
      height={0} />
  );
}

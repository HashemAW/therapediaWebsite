import React from 'react';
import Image from 'next/image';
import footerMapImage from '../../../public/images/footer-map.png'


export default function FooterMapImage() {
  return <Image
  unoptimized={true}
    src={footerMapImage}
    alt="Therapedia Location map"
    width={0}
    height={0}
    sizes="100vw"
    style={{ width: '100%', height: 'auto' }} />;
}

import React from 'react';
import { SocialMediaIcon } from './SocialMediaIcon';



export function SocialMediaIcons({ classes, subclasses }) {
  return (
    <div className={classes}>

      <div className={subclasses}>
        <SocialMediaIcon image={"/images/social/social icons -01.svg"} bgColor={'purple'} alt={'info icon'} />
        <SocialMediaIcon image={"/images/social/social icons -04.svg"} bgColor={'purple'} alt={'location'} />
      </div>



      <div className={subclasses}>
        <SocialMediaIcon image={"/images/social/social icons -03.svg"} bgColor={'green-dark'} alt={'whatsapp'} />
        <SocialMediaIcon image={"/images/social/social icons -05.svg"} bgColor={'orange'} alt={'phone number'} />
        <SocialMediaIcon image={"/images/social/social icons -02.svg"} bgColor={'pink'} alt={'instigram'} />
        {/* <SocialMediaIcon image={"/images/social/social icons -06.svg"} bgColor={'blue'} alt={'twitter'} /> */}
      </div>
    </div>

  );
}

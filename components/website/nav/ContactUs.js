import React from 'react';
import { AiFillMail } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Link from '../../Link';

export function ContactUs({ }) {
  return (
  <div id="footer_contactus" className='w-full  flex flex-col gap-5'>
    <h3 className="text-lg   font-como-bold text-blue-dark"> Contact Us </h3>
    <div className='flex flex-col gap-5'>
      <Link className='font-como-medium flex flex-row text-sm gap-2 items-center' href='/' target="_blank" rel="noreferrer"><FaMapMarkerAlt className='text-blue' /> Muscat</Link>
      <Link className='font-como-medium flex flex-row text-sm gap-2 items-center' href='/' target="_blank" rel="noreferrer"><BsFillTelephoneFill className='text-blue' />
        <div className='font-como-medium flex flex-col'>
          <span>+968 24479791</span>
          <span>+968 71609994</span>
          <span>+968 71609995</span>
        </div>
      </Link>
      

      <Link className='font-como-medium flex flex-row text-sm gap-2 items-center' 
      href="mailto:info@therapediaoman.com" 
      ><AiFillMail className='text-blue' />info@therapediaoman.com</Link>
    </div>
  </div>);
}

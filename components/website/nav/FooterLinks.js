import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import Link from '../../Link';
import LanguageChanger from './LanguageChanger';

export function FooterLinks() {
  return <div className='w-full flex flex-col gap-5'>
    <h3 className="text-lg  font-como-bold text-blue-dark"> Content </h3>
    <Link className='font-como-medium flex flex-row text-sm gap-2 items-center' href='/#aboutus' rel="noreferrer"><FaAngleDoubleRight />About Us</Link>
    <Link className='font-como-medium flex flex-row text-sm gap-2 items-center' href='/ourprograms' rel="noreferrer"><FaAngleDoubleRight />Our Programs</Link>
    <Link className='font-como-medium flex flex-row text-sm gap-2 items-center' href='/ourexperts' rel="noreferrer"><FaAngleDoubleRight />Our Experts </Link>

    {/* <LanguageChanger /> */}
  </div>;
}

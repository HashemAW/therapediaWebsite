import React from "react";
import Image from "next/image";

import Link from '../../Link'
import { useTranslation } from "next-i18next";
import  LanguageChanger from "./LanguageChanger";



export function MainMenuLinks({ pageLabel, classes, links }) {
  const { t } = useTranslation('common');

  const renderLink = (link, index) => {
    return (
        <li key={pageLabel + link.label + index} >
          <Link href={link.href} 
            className={`flex lg:text-center font-como-light uppercase text-dark-grey-62   hover:text-pink-dark  ${link.active?'text-pink-dark underline decoration-blue decoration-2 underline-offset-4	 decoration-wavy leading-0	':''}`}
            > 
            <span className='whitespace-nowrap'>{t(link.label)} </span>
            {link.children && link.children}
          </Link>
        </li>
    )
  }

  return (
      <ul className={classes}>
        {links.map((link, index) => renderLink(link, index))}
        <LanguageChanger />
      </ul>
  )
}
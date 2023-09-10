import React, { useState } from 'react';
import LanguageSwitchLink from '../../LanguageSwitchLink';
import i18nextConfig from '../../../next-i18next.config';
import { useRouter } from 'next/router';
import {AiFillCaretDown} from 'react-icons/ai'

export default function LanguageChanger() {

  const router = useRouter()
  const [show, setShow] = useState(false)
  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale
  
  const toggleShow = () => {
    setShow(!show)
  }
  return (
      <div className="inline-block items-start  justify-start relative">
      <div className="flex flex-row gap-2" onClick={toggleShow} >
        <button className="font-como-bold text-sm font-base text-start uppercase">{currentLocale==='en'?"En":"عربي"}</button>
        <AiFillCaretDown/>
      </div> 
      <div id="myDropdown" className={`${show?'flex flex-col w-fit items-center justify-start':'hidden'} absolute   shadow-lg z-top `}>
        {
          i18nextConfig.i18n.locales.map((locale) => {
            if (locale === currentLocale) return null;
            return (
              <LanguageSwitchLink locale={locale} key={locale} onClick={toggleShow}/>
            );
          })
        }
      </div>
    </div>
  )

}

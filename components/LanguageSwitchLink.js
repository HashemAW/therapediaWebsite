import languageDetector from '../lib/languageDetector'
import { useRouter } from 'next/router'
import Link from './Link'
import { useTranslation } from 'next-i18next';
import { useEffect } from 'react';

const LanguageSwitchLink = ({ locale,onClick, ...rest }) => {
  const router = useRouter()
  const { t, i18n } = useTranslation('common');

  let href = rest.href || router.asPath
  let pName = router.pathname
  Object.keys(router.query).forEach((k) => {
    if (k === 'locale') {
      pName = pName.replace(`[${k}]`, locale)
      return
    }
    pName = pName.replace(`[${k}]`, router.query[k])
  })
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName
  }

  useEffect(() => {
      document.body.dir = i18n.dir();
  }, [i18n]);

  return (
      <Link 
        className="z-top block bg-white w-full text-dark-grey-62 font-como-bold text-sm font-base border-b px-5 py-2 border-grey text-start"
        href={href}
        onClick={() => {
          onClick() 
          languageDetector.cache(locale)
        }}>
          {locale==='en'?"English":"عربي"}
      </Link>
  );
};

export default LanguageSwitchLink


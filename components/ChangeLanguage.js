import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";

export function ChangeLanguage() {
    const router = useRouter();
    const { pathname, asPath, query } = router
    const { t, i18n } = useTranslation('common');

    useEffect(() => {
        document.body.dir = i18n.dir();
    }, [i18n]);

    return (
            <select 
            defaultValue={'en'}
            className={'w-full p-2 text-sm font-bold text-serif  rounded-lg border text-dark-green bg-cream'}
            onChange={ (e)=>{
                router.push({ pathname, query }, asPath, { locale: e.target.value });
            }} >
                <option value='en'>{t('Choose Language')}</option>
                <option value='en'>{t('English')}</option>
                <option value='ar'>{t('Arabic')}</option>
            </select>
    );
}

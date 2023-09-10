

import Head from 'next/head';
// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import { CacheProvider } from '@emotion/react';
// import theme from '../config/theme';
// import createEmotionCache from '../config/createEmotionCache';
// const clientSideEmotionCache = createEmotionCache();
import '../styles/globals.css'
import { appWithTranslation } from "next-i18next";
import 'react-multi-carousel/lib/styles.css';





function MyApp({ Component, pageProps }) {

  return(
      <>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Component  {...pageProps} />
      </>
  )
}

export default appWithTranslation(MyApp)


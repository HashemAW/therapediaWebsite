module.exports = {
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'ar'],
    },
      /** To avoid issues when deploying to some paas (vercel...) */
  // localePath:
  // typeof window === 'undefined'
  //   ? require('path').resolve('./public/locales')
  //   : '/locales',
  localePath: require('path').resolve("./public/locales"),

    ns:['common'],
    fallbackNS: 'common'

    // react: { useSuspense: false }
  }
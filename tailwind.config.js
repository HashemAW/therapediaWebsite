    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",

    ],

    theme: {
      extend: {
        objectPosition: {
          'center-bottom': 'center bottom',
          'center-top': '30% top',

        },
          spacing: {
            '17': '4.375rem',
          },
          boxShadow:{
            'image': '1px 5px 5px 5px rgba(0, 0, 0, 0.3)'

          },
          backgroundImage: {
            'main-bg': "url('../public/images/bgs/9-01.png')",
            'shop-bg': "url('../public/images/bgs/1-02.png')",
            'programs-main-bg': "url('../public/images/bgs/9-02.png')",
            'experts-main-bg': "url('../public/images/bgs/12-04.png')",
            'programs-carousel-bg': "url('../public/images/bgs/9-03.png')",
            'corevalues-bg': "url('../public/images/bgs/9-04.png')",
            'wavy-dashed-divider-bg': "url('../public/images/frames/dashed-wavy-border.png')",
          },
          borderRadius: {
            'photos': '40px',
          },
          fontFamily: {
            "como-normal": ["Como", "sans-serif"],
            "como-semibold": ["Como SemiBold", "sans-serif"],
            "como-medium": ["Como Medium", "sans-serif"],
            "como-light": ["Como Light", "sans-serif"],
            "como-heavy": ["Como Heavy", "sans-serif"],
            "como-extralight": ["Como Extra Light", "sans-serif"],
            "como-extrabold": ["Como Extra Bold", "sans-serif"],
            "como-bold": ["Como Bold", "sans-serif"],
          },
          fontSize: {
            'xs': '0.7rem',
            'sm': '0.8rem',
            'base': '1rem',
            'xl': '1.25rem',
            '2xl': '1.563rem',
            '3xl': '1.953rem',
            '4xl': '2.1rem',
            '4.5xl': '3.25rem',
            '5xl': '4.2rem',
          },
          colors: {
            'blue':{
              DEFAULT:'#00B1FF',
              dark:'#2B398C'
            },
            'red':{
              DEFAULT: '#E11A4B',
              '01':'#DD0C3C',
              '02':'#F7CAD6',
              '03':'#E43961',
              '04':'#E43961',

            },
            'orange':'#EE8305',
            'purple':{
              DEFAULT: '#8C85AC',
              '01':'#8079A3',
              '02':'#E4E3EC',
              '03':'#CAC8D9',
              '04':'#B2ADC7',
              '05':'#9993B4',
            },
            'green':{
              DEFAULT: '#9CC3A9',
              dark:'#619F75',
            },
            'pink':{
              DEFAULT:'#C75495',
              dark:'#CB5499'
            },
            
            'grey': {
              DEFAULT:'#AEAFAF',
              light:'#D7DFD8',
              medium:'#D3CACA',
              dark:'#6D6D6D',
              '01': '#E9E5E5',
              '02':'#EBECEC',
              '03':'#9B8F8F'
            },
          

            // 'dark-green': '#0F412E',
            // 'light-green': '#D7DFD8',
            // // 'orange': '#FCB18D',
            // 'orange-50': 'rgba(245, 168, 131, 0.50)',
            // // 'pink': '#FFDFEA',
            // 'cream': '#F6F5EF',
            // 'dark-green-rgba': 'rgba(15, 65, 46, 0.6)',
            // 'dark-green-80': 'rgba(15, 65, 46, 0.8)',
            // 'dark-green-60': 'rgba(15, 65, 46, 0.6)',
            // // 'pink-30': 'rgba(255, 223, 234, 0.3)',
            // // 'pink-40': 'rgba(255, 223, 234, 0.4)',
            // 'light-green-40': 'rgba(215, 223, 216, 0.4)',
            // 'light-green-30': 'rgba(215, 223, 216, 0.3)',
            // 'light-green-20': 'rgba(215, 223, 216, 0.2)',
            // 'light-pink': '#FBE8EC',
            // 'dark-grey': '#6D6D6D',
            // 'light-grey': '#DADADA',
            // 'dark-grey-62':'#626262',
            // 'dark-grey-82':'#828282'
          },
          screens: {
            'xlg': '1400px'
          },
          zIndex: {
            'normal': '1',
            'loader' : '50',
            'sidebar': '40',
            'overlay-1': '10',
            'overlay-2': '20',
            'top': '100'
          }
        },
    },
    plugins: [

      require('@tailwindcss/line-clamp'),

    ],
    // Newer versions of Tailwind only seem to add classes that have been used in your code. When using dynamic classes (like the ones in your example) you will have to declare them within the safelist property.
    safelist: [{
      pattern: /(bg|text|border|fill|stroke)-(blue|red|orange|purple|green|pink|grey)/
    },
    {
      pattern: /(mt|mb|mr|ml|my|mx|px|py|pt|pb|pl|pr)-[0-9]+/
    },
    {
      pattern: /flex-.*/
    },
    // {
    //   pattern: /(bottom|right|top|left)-[0-9]+/
    // },
    // {
    //   pattern: /(w|h)-[0-9]+/
    // }
    // ,
    {
      pattern: /flex-.*-reverse/
    }
    ,
    {
      pattern: /(bottom|right|top|left)-.*/
    }
    ,
    {
      pattern: /(w|h)-.*/
    }
    ,
    {
      pattern: /(bg)-(main-bg|shop-bg|experts-main-bg|programs-main-bg|programs-carousel-bg|wavy-dashed-divider-bg|corevalues-bg)/
    }
    ,
    {
      pattern: /(bg|text|border)-[.*]/
    }
    
  ]
    }
    
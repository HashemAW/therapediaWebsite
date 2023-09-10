

// const { i18n } = require('./next-i18next.config')


const nextConfig = {
  reactStrictMode: true, // in strict mode useEffect is called twice 
  // i18n,

  transpilePackages: [
    "@babel/preset-react",
    // "@fullcalendar/common",
    // "@fullcalendar/daygrid",
    // "@fullcalendar/interaction",
    // "@fullcalendar/react",
    // "@fullcalendar/timegrid",
    // "@fullcalendar/list",
  ]

  /*
  https://reactjs.org/docs/strict-mode.html#ensuring-reusable-state

  To help surface these issues, React 18 introduces a new development-only check to Strict Mode. 
  This new check will automatically unmount and remount every component, whenever a component mounts for the first time, 
  restoring the previous state on the second mount.
  */
}
module.exports =
  {
    swcMinify: false, // this with run npm install --no-optional needed for ubuntu installation

  ...nextConfig,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'robohash.org',
  //       port: '443',
  //       pathname: '/',
  //     },
  //   ],
  // },  
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
  },
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        "fs": false,
        "path": false,
        "os": false,
      }
    }
    return config
  }
  }


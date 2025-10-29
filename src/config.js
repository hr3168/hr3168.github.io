module.exports = {
  siteTitle: 'Rong Huang',
  siteDescription:
    'Rong Huang is a Ph.D. candidate in the Computational Media and Arts Thrust at the Information Hub, The Hong Kong University of Science and Technology (Guangzhou), co-supervised by Prof. Wei Zeng and Prof. Kang Zhang.',
  siteKeywords:
    'Rong Huang, Rong, Huang, ronghuang, computational media and arts, information hub, The hong kong university of science and technology (Guangzhou), China',
  siteUrl: 'https://hr3168.github.io/research',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Rong Huang',
  location: 'China',
  email: 'rhuang421@connect.hkust-gz.edu.cn',
  github: '@',
  twitterHandle: '@',
  socialMedia: [
    // {
    //   name: 'GitHub',
    //   url: 'https://github.com/hr3168',
    // },
    // {
    //   name: 'Linkedin',
    //   url: 'https://www.linkedin.com/in/yashitanamdeo/',
    // },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/yashitanamdeo',
    // },
    // {
    //   name: 'Instagram',
    //   url: 'https://www.instagram.com/yashitanamdeo',
    // },
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com/',
    // },
  ],

  navLinks: [
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

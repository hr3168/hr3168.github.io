import { hex2rgba } from '@utils';

// 旧的颜色 深色配色

// const ACCENT = '#64ffda';
// const DARK_BG = '#020c1b';
// const BG = '#0a192f';

// const theme = {
//   colors: {
//     darkNavy: DARK_BG,
//     navy: BG,
//     lightNavy: '#172a45',
//     lightestNavy: '#303C55',
//     slate: '#8892b0',
//     lightSlate: '#a8b2d1',
//     lightestSlate: '#ccd6f6',
//     white: '#e6f1ff',
//     green: ACCENT,
//     transGreen: hex2rgba(ACCENT, 0.07),
//     shadowNavy: hex2rgba(DARK_BG, 0.7),
//   },

// 新的颜色 浅色配色

const ACCENT = '#E98F71'; // 两侧和导航栏的颜色
// const ACCENT = '#3DA8A5'; // 两侧和导航栏的颜色
const DARK_BG = '#FFFFFF';
const BG = '#FFFFFF';

const theme = {
  colors: {
    darkNavy: DARK_BG,
    navy: BG,
    lightNavy: '#EFA623',
    lightestNavy: '#EFA623', // 论文卡片背景颜色
    slate: '#D34211', // 简介主要文字 颜色
    lightSlate: '#FFFFFF', // 论文卡片文字颜色
    lightestSlate: '#D34211',
    white: '#FFFFFF',
    green: ACCENT,
    transGreen: hex2rgba(ACCENT, 0.1),
    shadowNavy: hex2rgba(DARK_BG, 0.17),
  },

  fonts: {
    Calibre:
      'Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
    SFMono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
  },

  fontSizes: {
    xs: '12px',
    smish: '13px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '22px',
    h3: '32px',
  },

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  borderRadius: '3px',
  navHeight: '100px',
  navScrollHeight: '70px',
  margin: '20px',

  tabHeight: 42,
  tabWidth: 120,
  radius: 3,

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,

  navDelay: 1000,
  loaderDelay: 2000,
};

export default theme;

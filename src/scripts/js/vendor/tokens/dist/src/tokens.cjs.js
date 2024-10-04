'use strict';
var p = Object.defineProperty,
  h = Object.defineProperties;
var v = Object.getOwnPropertyDescriptors;
var e = Object.getOwnPropertySymbols;
var x = Object.prototype.hasOwnProperty,
  f = Object.prototype.propertyIsEnumerable;
var l = (r, a, o) =>
    a in r
      ? p(r, a, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (r[a] = o),
  s = (r, a) => {
    for (var o in a || (a = {})) x.call(a, o) && l(r, o, a[o]);
    if (e) for (var o of e(a)) f.call(a, o) && l(r, o, a[o]);
    return r;
  },
  c = (r, a) => h(r, v(a));
Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
const t = {
    xxxl: '27px',
    xxl: '22px',
    xl: '18px',
    l: '16px',
    n: '14px',
    s: '12px',
  },
  i = {
    fontSize: c(s({}, t), {
      h1: t.xxxl,
      h2: t.xxl,
      h3: t.xl,
      h4: t.l,
      h5: t.n,
      h6: t.s,
    }),
    lineHeight: {
      null: '0',
      reset: '1',
      xl: '2',
      l: '1.5',
      n: '1.4',
      s: '1.3',
      xs: '1.2',
      xxs: '1.1',
    },
    iconSize: {
      xxxl: '32px',
      xxl: '28px',
      xl: '24px',
      l: '20px',
      n: '18px',
      s: '16px',
    },
  },
  d = {
    space: {
      0: '0',
      px: '1px',
      0.5: '2px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      10: '40px',
      12: '48px',
      16: '64px',
      20: '80px',
      24: '96px',
      32: '128px',
      40: '160px',
    },
    radius: {
      xs: '2px',
      sm: '4px',
      md: '8px',
      lg: '12px',
      xl: '16px',
      xxl: '24px',
      round: '50%',
      pill: '9999px',
    },
  };
function b(r) {
  return {
    shadow: {
      color: r.shadow,
      colorRgb: r.shadowRgb,
      none: 'none',
      xs: `0px 1px 4px 0px rgba(${r.shadowRgb}, 0.02), 0px 1px 1px -1px rgba(${r.shadowRgb}, 0.04), 0px 1px 12px -3px rgba(${r.shadowRgb}, 0.08), 0px 3px 1px -2px rgba(${r.shadowRgb}, 0.02)`,
      sm: `0px 2px 8px 0px rgba(${r.shadowRgb}, 0.02), 0px 2px 4px -1px rgba(${r.shadowRgb}, 0.04), 0px 4px 12px -1px rgba(${r.shadowRgb}, 0.08), 0px 3px 1px -2px rgba(${r.shadowRgb}, 0.04)`,
      md: `0px 3px 12px 2px rgba(${r.shadowRgb}, 0.02), 0px 8px 12px 2px rgba(${r.shadowRgb}, 0.04), 0px 4px 16px -1px rgba(${r.shadowRgb}, 0.08), 0px 3px 1px -2px rgba(${r.shadowRgb}, 0.04)`,
      lg: `0px 4px 24px 4px rgba(${r.shadowRgb}, 0.02), 0px 12px 16px 2px rgba(${r.shadowRgb}, 0.04), 0px 8px 16px -1px rgba(${r.shadowRgb}, 0.08), 0px 4px 44px -8px rgba(${r.shadowRgb}, 0.08)`,
      xl: `0px 8px 48px 8px rgba(${r.shadowRgb}, 0.02), 0px 24px 36px 2px rgba(${r.shadowRgb}, 0.04), 0px 12px 24px -6px rgba(${r.shadowRgb}, 0.08), 0px 3px 52px -12px rgba(${r.shadowRgb}, 0.16)`,
    },
    focus: {
      color: r.focusRing,
      width: d.space.px,
      offset: '0',
      outline: `${d.space.px} solid ${r.focusRing}`,
    },
    duration: {
      shortest: '120ms',
      shorter: '150ms',
      short: '180ms',
      standard: '210ms',
      complex: '380ms',
      entering: '280ms',
      leaving: '210ms',
    },
  };
}
const n = {
    white: {
      50: 'var(--tds-color-white-50)',
      100: 'var(--tds-color-white-100)',
      200: 'var(--tds-color-white-200)',
      300: 'var(--tds-color-white-300)',
      400: 'var(--tds-color-white-400)',
      500: 'var(--tds-color-white-500)',
      600: 'var(--tds-color-white-600)',
      700: 'var(--tds-color-white-700)',
      800: 'var(--tds-color-white-800)',
      900: 'var(--tds-color-white-900)',
      solid: 'var(--tds-color-white-solid)',
    },
    black: {
      50: 'var(--tds-color-black-50)',
      100: 'var(--tds-color-black-100)',
      200: 'var(--tds-color-black-200)',
      300: 'var(--tds-color-black-300)',
      400: 'var(--tds-color-black-400)',
      500: 'var(--tds-color-black-500)',
      600: 'var(--tds-color-black-600)',
      700: 'var(--tds-color-black-700)',
      800: 'var(--tds-color-black-800)',
      900: 'var(--tds-color-black-900)',
      solid: 'var(--tds-color-black-solid)',
    },
    primary: {
      main: 'var(--tds-color-primary-main)',
      mainRgb: 'var(--tds-color-primary-main-rgb)',
      light: 'var(--tds-color-primary-light)',
      lighter: 'var(--tds-color-primary-lighter)',
      dark: 'var(--tds-color-primary-dark)',
      contrast: 'var(--tds-color-primary-contrast)',
      contrastRgb: 'var(--tds-color-primary-contrast-rgb)',
      shade: {
        subtle: 'var(--tds-color-primary-shade-subtle)',
        muted: 'var(--tds-color-primary-shade-muted)',
        soft: 'var(--tds-color-primary-shade-soft)',
        emphasis: 'var(--tds-color-primary-shade-emphasis)',
        strong: 'var(--tds-color-primary-shade-strong)',
      },
      alpha: {
        50: 'var(--tds-color-primary-alpha-50)',
        100: 'var(--tds-color-primary-alpha-100)',
        200: 'var(--tds-color-primary-alpha-200)',
        300: 'var(--tds-color-primary-alpha-300)',
        400: 'var(--tds-color-primary-alpha-400)',
      },
    },
    secondary: {
      main: 'var(--tds-color-secondary-main)',
      mainRgb: 'var(--tds-color-secondary-main-rgb)',
      light: 'var(--tds-color-secondary-light)',
      lighter: 'var(--tds-color-secondary-lighter)',
      contrast: 'var(--tds-color-secondary-contrast)',
      contrastRgb: 'var(--tds-color-secondary-contrast-rgb)',
      shade: {
        subtle: 'var(--tds-color-secondary-shade-subtle)',
        muted: 'var(--tds-color-secondary-shade-muted)',
        soft: 'var(--tds-color-secondary-shade-soft)',
        emphasis: 'var(--tds-color-secondary-shade-emphasis)',
        strong: 'var(--tds-color-secondary-shade-strong)',
      },
      alpha: {
        50: 'var(--tds-color-secondary-alpha-50)',
        100: 'var(--tds-color-secondary-alpha-100)',
        200: 'var(--tds-color-secondary-alpha-200)',
        300: 'var(--tds-color-secondary-alpha-300)',
        400: 'var(--tds-color-secondary-alpha-400)',
      },
    },
    info: {
      main: 'var(--tds-color-info-main)',
      mainRgb: 'var(--tds-color-info-main-rgb)',
      light: 'var(--tds-color-info-light)',
      lighter: 'var(--tds-color-info-lighter)',
      darker: 'var(--tds-color-info-darker)',
      contrast: 'var(--tds-color-info-contrast)',
      contrastRgb: 'var(--tds-color-info-contrast-rgb)',
      shade: {
        subtle: 'var(--tds-color-info-shade-subtle)',
        muted: 'var(--tds-color-info-shade-muted)',
        soft: 'var(--tds-color-info-shade-soft)',
        emphasis: 'var(--tds-color-info-shade-emphasis)',
        strong: 'var(--tds-color-info-shade-strong)',
      },
      alpha: {
        50: 'var(--tds-color-info-alpha-50)',
        100: 'var(--tds-color-info-alpha-100)',
        200: 'var(--tds-color-info-alpha-200)',
        300: 'var(--tds-color-info-alpha-300)',
        400: 'var(--tds-color-info-alpha-400)',
      },
    },
    success: {
      main: 'var(--tds-color-success-main)',
      mainRgb: 'var(--tds-color-success-main-rgb)',
      light: 'var(--tds-color-success-light)',
      lighter: 'var(--tds-color-success-lighter)',
      darker: 'var(--tds-color-success-darker)',
      contrast: 'var(--tds-color-success-contrast)',
      contrastRgb: 'var(--tds-color-success-contrast-rgb)',
      shade: {
        subtle: 'var(--tds-color-success-shade-subtle)',
        muted: 'var(--tds-color-success-shade-muted)',
        soft: 'var(--tds-color-success-shade-soft)',
        emphasis: 'var(--tds-color-success-shade-emphasis)',
        strong: 'var(--tds-color-success-shade-strong)',
      },
      alpha: {
        50: 'var(--tds-color-success-alpha-50)',
        100: 'var(--tds-color-success-alpha-100)',
        200: 'var(--tds-color-success-alpha-200)',
        300: 'var(--tds-color-success-alpha-300)',
        400: 'var(--tds-color-success-alpha-400)',
      },
    },
    warning: {
      main: 'var(--tds-color-warning-main)',
      mainRgb: 'var(--tds-color-warning-main-rgb)',
      light: 'var(--tds-color-warning-light)',
      lighter: 'var(--tds-color-warning-lighter)',
      darker: 'var(--tds-color-warning-darker)',
      contrast: 'var(--tds-color-warning-contrast)',
      contrastRgb: 'var(--tds-color-warning-contrast-rgb)',
      shade: {
        subtle: 'var(--tds-color-warning-shade-subtle)',
        muted: 'var(--tds-color-warning-shade-muted)',
        soft: 'var(--tds-color-warning-shade-soft)',
        emphasis: 'var(--tds-color-warning-shade-emphasis)',
        strong: 'var(--tds-color-warning-shade-strong)',
      },
      alpha: {
        50: 'var(--tds-color-warning-alpha-50)',
        100: 'var(--tds-color-warning-alpha-100)',
        200: 'var(--tds-color-warning-alpha-200)',
        300: 'var(--tds-color-warning-alpha-300)',
        400: 'var(--tds-color-warning-alpha-400)',
      },
    },
    error: {
      main: 'var(--tds-color-error-main)',
      mainRgb: 'var(--tds-color-error-main-rgb)',
      light: 'var(--tds-color-error-light)',
      lighter: 'var(--tds-color-error-lighter)',
      darker: 'var(--tds-color-error-darker)',
      contrast: 'var(--tds-color-error-contrast)',
      contrastRgb: 'var(--tds-color-error-contrast-rgb)',
      shade: {
        subtle: 'var(--tds-color-error-shade-subtle)',
        muted: 'var(--tds-color-error-shade-muted)',
        soft: 'var(--tds-color-error-shade-soft)',
        emphasis: 'var(--tds-color-error-shade-emphasis)',
        strong: 'var(--tds-color-error-shade-strong)',
      },
      alpha: {
        50: 'var(--tds-color-error-alpha-50)',
        100: 'var(--tds-color-error-alpha-100)',
        200: 'var(--tds-color-error-alpha-200)',
        300: 'var(--tds-color-error-alpha-300)',
        400: 'var(--tds-color-error-alpha-400)',
      },
    },
    text: {
      primary: 'var(--tds-color-text-primary)',
      secondary: 'var(--tds-color-text-secondary)',
      muted: 'var(--tds-color-text-muted)',
      subtle: 'var(--tds-color-text-subtle)',
    },
    background: {
      main: 'var(--tds-color-background-main)',
      paper: 'var(--tds-color-background-paper)',
      'elevation-xs': 'var(--tds-color-background-elevation-xs)',
      'elevation-sm': 'var(--tds-color-background-elevation-sm)',
      'elevation-md': 'var(--tds-color-background-elevation-md)',
      'elevation-lg': 'var(--tds-color-background-elevation-lg)',
      'elevation-xl': 'var(--tds-color-background-elevation-xl)',
    },
    border: {
      primary: 'var(--tds-color-border-primary)',
      secondary: 'var(--tds-color-border-secondary)',
      strong: 'var(--tds-color-border-strong)',
    },
    overlay: { dark: 'var(--tds-color-overlay-dark)' },
    focusRing: 'var(--tds-color-focus-ring)',
    shadow: 'var(--tds-color-shadow)',
    shadowRgb: 'var(--tds-color-shadow-rgb)',
  },
  g = {
    white: {
      50: 'rgba(255,255,255,0.04)',
      100: 'rgba(255,255,255,0.06)',
      200: 'rgba(255,255,255,0.08)',
      300: 'rgba(255,255,255,0.16)',
      400: 'rgba(255,255,255,0.24)',
      500: 'rgba(255,255,255,0.36)',
      600: 'rgba(255,255,255,0.48)',
      700: 'rgba(255,255,255,0.64)',
      800: 'rgba(255,255,255,0.8)',
      900: 'rgba(255,255,255,0.92)',
      solid: '#fff',
    },
    black: {
      50: 'rgba(0,0,0,0.04)',
      100: 'rgba(0,0,0,0.06)',
      200: 'rgba(0,0,0,0.08)',
      300: 'rgba(0,0,0,0.16)',
      400: 'rgba(0,0,0,0.24)',
      500: 'rgba(0,0,0,0.36)',
      600: 'rgba(0,0,0,0.48)',
      700: 'rgba(0,0,0,0.64)',
      800: 'rgba(0,0,0,0.8)',
      900: 'rgba(0,0,0,0.92)',
      solid: '#000',
    },
    primary: {
      main: '#0b62da',
      mainRgb: '11, 98, 218',
      light: '#2572e2',
      lighter: '#4a91f4',
      dark: '#104ea2',
      contrast: '#fff',
      contrastRgb: '255, 255, 255',
      shade: {
        subtle: '#f5f9fe',
        muted: '#e5eef8',
        soft: '#d2e2f6',
        emphasis: '#b1ccf1',
        strong: '#6a9fe7',
      },
      alpha: {
        50: 'rgba(11,98,218,0.05)',
        100: 'rgba(11,98,218,0.1)',
        200: 'rgba(11,98,218,0.2)',
        300: 'rgba(11,98,218,0.3)',
        400: 'rgba(11,98,218,0.4)',
      },
    },
    secondary: {
      main: '#0c2340',
      mainRgb: '12, 35, 64',
      light: '#30445d',
      lighter: '#586c85',
      contrast: '#fff',
      contrastRgb: '255, 255, 255',
      shade: {
        subtle: '#edf0f4',
        muted: '#e5e9ee',
        soft: '#d2d8dd',
        emphasis: '#b1b9c3',
        strong: '#798697',
      },
      alpha: {
        50: 'rgba(12,35,64,0.05)',
        100: 'rgba(12,35,64,0.1)',
        200: 'rgba(12,35,64,0.2)',
        300: 'rgba(12,35,64,0.3)',
        400: 'rgba(12,35,64,0.4)',
      },
    },
    info: {
      main: '#0a7cb5',
      mainRgb: '10, 124, 181',
      light: '#1d92cc',
      lighter: '#49a1cc',
      darker: '#043248',
      contrast: '#fff',
      contrastRgb: '255, 255, 255',
      shade: {
        subtle: '#f5fafc',
        muted: '#e6f2f8',
        soft: '#d0e6f1',
        emphasis: '#b5d8e9',
        strong: '#84bdda',
      },
      alpha: {
        50: 'rgba(10,124,181,0.05)',
        100: 'rgba(10,124,181,0.1)',
        200: 'rgba(10,124,181,0.2)',
        300: 'rgba(10,124,181,0.3)',
        400: 'rgba(10,124,181,0.4)',
      },
    },
    success: {
      main: '#0f8542',
      mainRgb: '15, 133, 66',
      light: '#239956',
      lighter: '#41b774',
      darker: '#00421c',
      contrast: '#fff',
      contrastRgb: '255, 255, 255',
      shade: {
        subtle: '#f5faf7',
        muted: '#e7f3ec',
        soft: '#d1e7da',
        emphasis: '#b7dac6',
        strong: '#87c2a0',
      },
      alpha: {
        50: 'rgba(15,133,66,0.05)',
        100: 'rgba(15,133,66,0.1)',
        200: 'rgba(15,133,66,0.2)',
        300: 'rgba(15,133,66,0.3)',
        400: 'rgba(15,133,66,0.4)',
      },
    },
    warning: {
      main: '#db7e00',
      mainRgb: '150, 69, 10',
      light: '#ffaa00',
      lighter: '#ffc02e',
      darker: '#682400',
      contrast: '#fff',
      contrastRgb: '255, 255, 255',
      shade: {
        subtle: '#fffcf5',
        muted: '#fff6e5',
        soft: '#ffedc9',
        emphasis: '#ffe5b2',
        strong: '#ffd67d',
      },
      alpha: {
        50: 'rgba(219,126,0,0.05)',
        100: 'rgba(219,126,0,0.1)',
        200: 'rgba(219,126,0,0.2)',
        300: 'rgba(219,126,0,0.3)',
        400: 'rgba(219,126,0,0.4)',
      },
    },
    error: {
      main: '#d22d2d',
      mainRgb: '139, 30, 30',
      light: '#d84a4a',
      lighter: '#ec5e5e',
      darker: '#470f0f',
      contrast: '#fff',
      contrastRgb: '255, 255, 255',
      shade: {
        subtle: '#fdf7f7',
        muted: '#faeaea',
        soft: '#f6d7d7',
        emphasis: '#f1c0c0',
        strong: '#e99696',
      },
      alpha: {
        50: 'rgba(210,45,45,0.05)',
        100: 'rgba(210,45,45,0.1)',
        200: 'rgba(210,45,45,0.2)',
        300: 'rgba(210,45,45,0.3)',
        400: 'rgba(210,45,45,0.4)',
      },
    },
    text: {
      primary: '#0f1c2b',
      secondary: '#4d5662',
      muted: '#6e7783',
      subtle: '#bbbfc4',
    },
    background: {
      main: '#f8fafb',
      paper: '#fff',
      'elevation-xs': '#fff',
      'elevation-sm': '#fff',
      'elevation-md': '#fff',
      'elevation-lg': '#fff',
      'elevation-xl': '#fff',
    },
    border: { primary: '#e5e9ee', secondary: '#b1b9c3', strong: '#798697' },
    overlay: { dark: 'rgba(0,0,0,0.48)' },
    focusRing: '#2572e2',
    shadow: '#0c2340',
    shadowRgb: '12, 35, 64',
  },
  m = s(s(s({ color: g }, d), i), b(g)),
  u = s(s(s({ color: n }, d), i), b(n));
exports.tokensDynamic = u;
exports.tokensLight = m;

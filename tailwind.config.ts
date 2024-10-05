import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      'main-header': ['24px', { fontWeight: '700' }],
      'section-header': ['18px', { fontWeight: '700' }],
      subheader: ['14px', { fontWeight: '700' }],
      'body-bold': ['12px', { fontWeight: '700' }],
      body: ['12px', { fontWeight: '400' }],
      'caption-bold': ['8px', { fontWeight: '700' }],
      caption: ['8px', { fontWeight: '400' }],
    },
    extend: {
      boxShadow: {
        custom: '-5px 0 80px -5px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        'primary-green': '#314A2A',
        'primary-medium-green': '#A0C78F',
        'primary-light-green': '#E1EDDA',
        'primary-dark-blue': '#2A535F',
        'primary-blue': '#92D4DD',
        'primary-light-blue': '#D9F2F4',

        'secondary-orange': '#F78F09',
        'secondary-light-orange': '#FDC33A',

        black: '#151515',
        'dark-grey': '#4F4F4F',
        'light-grey': '#888888',
        white: '#F4F4F4',
        'super-white': '#FFFFFF',

        'state-success': '#41CA76',
        'state-warning': '#FDC33A',
        'state-danger': '#F5615C',
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
      dropShadow: {
        button: '2px 5px 2px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
export default config

import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx,js}',
    './components/**/*.{ts,tsx,js}',
    './app/**/*.{ts,tsx,js}',
    './src/**/*.{ts,tsx,js}',
	],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#8EDEE8',
        primaryLight: '#DDF5F8',
        primaryDark: '#508187',
        secondary: '#435C75',
        secondaryLight: '#BFCAD0',
        secondaryDark: '#05182B',
        white: '#fff',
        black: '#303A3B',
        darkGrey: '#888E8E',
        grey: '#B8BEBF',
        success: '#31AC54',
        successLight: '#E8FFEE',
        successDark: '#084E1C',
        attention: '#F4C793',
        attentionLight: '#FDF4E9',
        attentionDark: '#BE8B4F',
        error: '#C85D57',
        errorLight: '#FBF2F1',
        errorDark: '#9B1B14',
        surface:'#FAFAFA',
        surface1:'#F7FBFC',
        surface2:'#F4FBFB',
        surface3:'#F1FAFB',
        surface4:'#ECF8FA',
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        xxl: '32px',
        xxxl: '48px',
        gt: '64px',
      },
      fontFamily: {
        'sans': ['var(--font-roboto)'],
      },
    }
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
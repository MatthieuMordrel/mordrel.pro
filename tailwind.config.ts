import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        techGrey: '#1C1C1C',
        techBlue: '#9fd7ca',
        techGreen: '#3ecf8e ',
        techOrange: '#EDB183',
        techPurple: '#9E829C',
        techYellow: '#FFD93D',
        borderGrey: '#262626',
        paneGrey: '#232323',
        textGrey: '#676767',
        activeBorderGrey: '#434343'
      },
      screens: {
        '3xl': '2000px'
      }
    },
    keyframes: {
      'keyframe-border-spin': {
        '100%': {
          transform: 'rotate(-360deg)'
        }
      },
      'keyframes-smooth-spin': {
        '0%': {
          transform: 'rotate(22.5deg)'
        },
        '10%': {
          transform: 'rotate(-22.5deg)'
        },
        '25%': {
          transform: 'rotate(-67.5deg)'
        },
        '35%': {
          transform: 'rotate(-112.5deg)'
        },
        '50%': {
          transform: 'rotate(-157.5deg)'
        },
        '60%': {
          transform: 'rotate(-202.5deg)'
        },
        '75%': {
          transform: 'rotate(-247.5deg)'
        },
        '85%': {
          transform: 'rotate(-292.5deg)'
        },
        '100%': {
          transform: 'rotate(-337.5deg)'
        }
      }
    },
    animation: {
      'border-spin': 'keyframe-border-spin 10s linear infinite',
      'smooth-spin': 'keyframes-smooth-spin 10s linear infinite'
    }
  },
  plugins: []
}
export default config

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
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        techGrey: '#1C1C1C',
        techBlue: '#9fd7ca',
        techGreen: '#3ecf8e ',
        techOrange: '#EDB183',
        techPurple: '#9E829C',
        //techPurple: '#9E829C',
        techYellow: '#FFD93D',
        borderGrey: '#262626',
        paneGrey: '#232323',
        textGrey: '#676767',
        activeBorderGrey: '#434343'
      },
      screens: {
        '3xl': '2000px'
      },
      animation: {
        'border-spin': 'keyframe-border-spin 10s linear infinite',
        'smooth-spin': 'keyframes-smooth-spin 10s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        orbit: 'orbit calc(var(--duration)*1s) linear infinite',
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear'
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
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        orbit: {
          '0%': {
            transform: 'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)'
          }
        },
        'border-beam': {
          '100%': {
            'offset-distance': '100%'
          }
        }
      }
    }
  },
  plugins: []
}
export default config

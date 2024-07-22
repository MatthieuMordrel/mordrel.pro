import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import type { PluginAPI } from 'tailwindcss/types/config'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        techGrey: '#1C1C1C',
        primaryText: 'rgb(236, 236, 236)',
        techBlue: '#9fd7ca',
        techGreen: '#3ecf8e ',
        techOrange: '#EDB183',
        techPurple: '#9E829C',
        techYellow: '#FFD93D',
        borderGrey: '#262626',
        paneGrey: '#232323',
        textGrey: '#676767',
        activeBorderGrey: '#434343',
        primary: {
          DEFAULT: 'hsl(222.2, 47.4%, 11.2%)', // Your primary color
          foreground: 'hsl(210, 40%, 98%)' // Your primary foreground color
        },
        background: 'hsl(0, 0%, 100%)', // Background color
        foreground: 'hsl(222.2, 47.4%, 11.2%)' // Foreground color
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
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
        'sliding-in': 'keyframe-sliding-in ',
        bounce1: 'bounceWithDelay 1s infinite',
        shimmer: 'shimmer 2s linear infinite'
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
        },
        bounceWithDelay: {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-25%)'
          }
        },
        shimmer: {
          from: {
            backgroundPosition: '0 0'
          },
          to: {
            backgroundPosition: '-200% 0'
          }
        }
      },
      fontFamily: {
        bitter: ['var(--font-bitter)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif']
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents }: PluginAPI) {
      addComponents({
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
          backgroundColor: '#1E40AF', // example additional styling
          color: '#fff'
        },
        '.textMedium': {
          fontSize: 'clamp(1rem, 0.464rem + 1.429vw, 1.625rem)',
          // textWrap: 'normal',
          fontStretch: '100%',
          lineHeight: '2rem',
          // fontWeight: '400',
          fontFamily: 'var(--font-bitter)'
          // color: 'rgb(15, 27, 97)',
          // backgroundColor: 'rgb(248,252,252)'
        },
        '.textSmall': {
          fontSize: 'clamp(0.75rem, 0.464rem + 1.429vw, 1.2rem)',
          // textWrap: 'normal',
          fontStretch: '100%',
          lineHeight: '2rem'
          // fontWeight: '400',
          // fontFamily: 'var(--font-bitter)'
          // color: 'rgb(15, 27, 97)',
          // backgroundColor: 'rgb(248,252,252)'
        },
        '.svgTextStyling': {
          fontWeight: '600',
          fontFamily: 'var(--font-bitter)',
          letterSpacing: '1px',
          pointerEvents: 'none'
        }
      })
    })
  ]
}
export default config

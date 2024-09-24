import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'
import type { PluginAPI } from 'tailwindcss/types/config'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-techGrey': 'linear-gradient(180deg, #1c1c1c, #2a2a2a)'
      },
      colors: {
        techGrey: 'hsl(0, 0%, 11%)',
        primaryText: 'hsl(6, 0%, 83%)',
        techBlue: 'hsl(170, 35%, 74%)',
        techPurple: 'hsl(315, 12%, 57%)',
        borderGrey: 'hsl(0, 0%, 15%)',
        paneGrey: 'hsl(0, 0%, 14%)',
        textGrey: 'hsl(0, 0%, 40%)',
        activeBorderGrey: 'hsl(0, 0%, 26%)'
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
        geist: ['var(--font-geist-sans)', ...fontFamily.sans]
      },
      boxShadow: {
        neon: "0 0 2px theme('colors.blue.200'), 0 0 2px theme('colors.blue.700')"
      },
      height: {
        customSize: 'calc(100vh - 62px)'
      }
    }
  },
  plugins: [
    plugin(function ({ theme, addComponents }: PluginAPI) {
      addComponents({
        '.textSmall': {
          fontSize: 'clamp(0.75rem, 0.464rem + 1.429vw, 1rem)',
          fontStretch: '100%'
        },
        '.textMedium': {
          fontSize: 'clamp(1.3rem, 1.157rem + 0.381vw, 1.5rem)',
          fontStretch: '100%',
          lineHeight: 'clamp(1.5rem, 0.464rem + 1.429vw, 2rem)'
        },
        '.textLarge': {
          fontSize: 'clamp(1.3rem, 0.086rem + 3.238vw, 2rem)',
          fontStretch: '100%',
          lineHeight: 'clamp(2rem, 0.464rem + 1.429vw, 3rem)'
        },
        '.titleResponsive': {
          fontSize: 'clamp(1.5rem, 0.429rem + 2.857vw, 3rem)'
        },
        '.svgTextStyling': {
          fontWeight: '600',
          fontFamily: 'var(--font-bitter)',
          letterSpacing: '1px',
          pointerEvents: 'none'
        },
        '.reportClass': {
          width: '600px',
          height: '600px'
        },
        '.fullheight': {
          minHeight: 'calc(100vh - 62px)'
        }
      })
    }),
    plugin(({ theme, matchUtilities }) => {
      const createNeonShadow = (value: string | Record<string, string>) => {
        const color = typeof value === 'object' ? value[500] : value
        const color2 = typeof value === 'object' ? value[700] : value
        return {
          boxShadow: `0 0 5px ${color}, 0 0 20px ${color2}`
        }
      }

      const neonUtilities = {
        neon: createNeonShadow
      }

      const neonOptions = {
        values: theme('colors')
      }

      matchUtilities(neonUtilities, neonOptions)
    })
  ]
}
export default config

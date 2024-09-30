import resolveConfig from 'tailwindcss/resolveConfig'
import config from '../tailwind.config'

const fullConfig = resolveConfig(config)

interface ExtendedColors {
  background: string
  techPurple: string
  techBlue: string
  foreground: string
  techGreen: string
  techOrange: string
  techYellow: string
  borderGrey: string
  paneGrey: string
  textGrey: string
  // Add other color properties as needed
}

export const colors: ExtendedColors = fullConfig.theme.colors as unknown as ExtendedColors

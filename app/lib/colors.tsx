import resolveConfig from 'tailwindcss/resolveConfig'
import config from '../../tailwind.config'

const fullConfig = resolveConfig(config)

interface ExtendedColors {
  techGrey: string
  techPurple: string
  techBlue: string
  // Add other color properties as needed
}

export const colors: ExtendedColors = fullConfig.theme.colors as unknown as ExtendedColors

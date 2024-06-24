import { colors as originalColors } from '@lib/colors' // Adjust the path as necessary

interface ExtendedColors {
  techGrey: string
  techPurple: string
  techBlue: string
  // Add other color properties as needed
}

export const colors: ExtendedColors = originalColors as unknown as ExtendedColors

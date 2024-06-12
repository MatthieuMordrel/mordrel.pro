// tailwind.d.ts
import 'tailwindcss/tailwind'

declare module 'tailwindcss/tailwind' {
  export interface DefaultColors {
    techGrey: string
    techBlue: string
    techGreen: string
    techOrange: string
    techPurple: string
    techYellow: string
    borderGrey: string
    paneGrey: string
    textGrey: string
    activeBorderGrey: string
  }
}

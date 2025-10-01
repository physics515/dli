import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      fontFamily: {
        'Cormorant-Garamond': ['"Cormorant Garamond"', 'serif'],
        'Fira-Sans': ['"Fira Sans"', 'sans-serif']
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ]
} satisfies Config

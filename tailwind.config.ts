import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        navy:     '#1B3A5C',
        terra:    '#C4622D',
        'terra-lt': '#E8835A',
        cream:    '#F5F0E8',
        text:     '#2D2D2D',
        'text-lt': '#5A5A5A',
        border:   '#D9CFC2',
        green:    '#2E6B3E',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans:  ['Source Sans 3', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#2D2D2D',
            fontFamily: 'Source Sans 3, system-ui, sans-serif',
            fontSize: '1.0625rem',
            lineHeight: '1.75',
            h1: { fontFamily: 'Playfair Display, Georgia, serif', color: '#1B3A5C' },
            h2: { fontFamily: 'Playfair Display, Georgia, serif', color: '#1B3A5C' },
            h3: { fontFamily: 'Playfair Display, Georgia, serif', color: '#1B3A5C' },
            h4: { fontFamily: 'Playfair Display, Georgia, serif', color: '#1B3A5C' },
            a: { color: '#C4622D', textDecoration: 'underline' },
            'a:hover': { color: '#E8835A' },
            strong: { color: '#2D2D2D' },
            blockquote: { borderLeftColor: '#C4622D', color: '#5A5A5A' },
            'thead th': { color: '#FFFFFF', backgroundColor: '#1B3A5C' },
            'tbody tr:nth-child(even)': { backgroundColor: '#F5F0E8' },
            hr: { borderColor: '#D9CFC2' },
            code: { color: '#C4622D', backgroundColor: '#F5F0E8', padding: '0.125rem 0.25rem', borderRadius: '0.25rem' },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;

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
        navy:       '#1B3A5C',
        'navy-dk':  '#111F30',
        'navy-lt':  '#264D78',
        terra:      '#C4622D',
        'terra-lt': '#E0784A',
        'terra-bg': '#FDF1EB',
        cream:      '#F5F0E8',
        'cream-dk': '#EDE6DA',
        sand:       '#F9F6F1',
        ink:        '#0D0D0D',
        'text-md':  '#3A3A3A',
        'text-lt':  '#717171',
        border:     '#E2D9CE',
        'border-lt':'#EEE9E3',
        green:      '#1F5C35',
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        serif:   ['Space Grotesk', 'system-ui', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem', letterSpacing: '0.12em' }],
      },
      boxShadow: {
        'card':      '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-md':   '0 4px 12px rgba(0,0,0,0.08)',
        'card-hover':'0 12px 32px rgba(0,0,0,0.12)',
        'nav':       '0 1px 0 #E2D9CE',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#0D0D0D',
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '1.0625rem',
            lineHeight: '1.8',
            maxWidth: 'none',
            h1: { fontFamily: 'Space Grotesk, system-ui, sans-serif', color: '#0D0D0D', fontWeight: '700', letterSpacing: '-0.02em' },
            h2: { fontFamily: 'Space Grotesk, system-ui, sans-serif', color: '#0D0D0D', fontWeight: '700', letterSpacing: '-0.02em', marginTop: '2.5rem' },
            h3: { fontFamily: 'Space Grotesk, system-ui, sans-serif', color: '#0D0D0D', fontWeight: '600', letterSpacing: '-0.01em' },
            h4: { fontFamily: 'Space Grotesk, system-ui, sans-serif', color: '#0D0D0D', fontWeight: '600' },
            a: { color: '#C4622D', textDecoration: 'none', fontWeight: '500', borderBottom: '1px solid currentColor' },
            'a:hover': { color: '#E0784A' },
            strong: { color: '#0D0D0D', fontWeight: '600' },
            blockquote: {
              borderLeftColor: '#C4622D',
              borderLeftWidth: '3px',
              color: '#3A3A3A',
              fontStyle: 'normal',
              backgroundColor: '#FDF1EB',
              padding: '1rem 1.5rem',
              borderRadius: '0 0.5rem 0.5rem 0',
            },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:last-of-type::after': { content: 'none' },
            'thead th': { color: '#FFFFFF', backgroundColor: '#1B3A5C', fontWeight: '600', fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.01em' },
            'tbody tr:nth-child(even)': { backgroundColor: '#F9F6F1' },
            'tbody td': { borderColor: '#E2D9CE' },
            hr: { borderColor: '#E2D9CE', marginTop: '2.5rem', marginBottom: '2.5rem' },
            code: { color: '#C4622D', backgroundColor: '#FDF1EB', padding: '0.15rem 0.4rem', borderRadius: '0.25rem', fontWeight: '500', fontSize: '0.875em' },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            li: { marginTop: '0.4rem', marginBottom: '0.4rem' },
            'ul > li::marker': { color: '#C4622D' },
            'ol > li::marker': { color: '#C4622D', fontWeight: '600' },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;

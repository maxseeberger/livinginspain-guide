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
        navy:      '#1B3A5C',
        'navy-dk': '#122840',
        'navy-lt': '#264D78',
        terra:     '#C4622D',
        'terra-lt':'#E8835A',
        'terra-bg':'#FDF1EB',
        cream:     '#F5F0E8',
        'cream-dk':'#EDE6DA',
        sand:      '#F9F6F1',
        text:      '#1A1A1A',
        'text-md': '#444444',
        'text-lt': '#6B6B6B',
        border:    '#E2D9CE',
        'border-lt':'#EDE8E2',
        green:     '#2E6B3E',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans:  ['Source Sans 3', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(27,58,92,0.06), 0 1px 2px -1px rgba(27,58,92,0.04)',
        'card-hover': '0 8px 24px -4px rgba(27,58,92,0.12), 0 4px 8px -2px rgba(27,58,92,0.06)',
        'nav': '0 1px 0 0 #E2D9CE',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1A1A1A',
            fontFamily: 'Source Sans 3, system-ui, sans-serif',
            fontSize: '1.0625rem',
            lineHeight: '1.8',
            maxWidth: 'none',
            h1: { fontFamily: 'Playfair Display, Georgia, serif', color: '#1B3A5C', fontWeight: '700', letterSpacing: '-0.01em' },
            h2: { fontFamily: 'Playfair Display, Georgia, serif', color: '#1B3A5C', fontWeight: '600', marginTop: '2.5rem', letterSpacing: '-0.01em' },
            h3: { fontFamily: 'Playfair Display, Georgia, serif', color: '#1B3A5C', fontWeight: '600' },
            h4: { fontFamily: 'Playfair Display, Georgia, serif', color: '#1B3A5C', fontWeight: '600' },
            a: { color: '#C4622D', textDecoration: 'none', fontWeight: '500', borderBottom: '1px solid #E8835A' },
            'a:hover': { color: '#E8835A', borderBottomColor: '#C4622D' },
            strong: { color: '#1A1A1A', fontWeight: '600' },
            blockquote: {
              borderLeftColor: '#C4622D',
              borderLeftWidth: '3px',
              color: '#444444',
              fontStyle: 'normal',
              backgroundColor: '#FDF1EB',
              padding: '1rem 1.25rem',
              borderRadius: '0 0.375rem 0.375rem 0',
            },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:last-of-type::after': { content: 'none' },
            'thead th': { color: '#FFFFFF', backgroundColor: '#1B3A5C', fontWeight: '600' },
            'tbody tr:nth-child(even)': { backgroundColor: '#F9F6F1' },
            'tbody td': { borderColor: '#E2D9CE' },
            hr: { borderColor: '#E2D9CE', marginTop: '2.5rem', marginBottom: '2.5rem' },
            code: { color: '#C4622D', backgroundColor: '#FDF1EB', padding: '0.15rem 0.35rem', borderRadius: '0.25rem', fontWeight: '500', fontSize: '0.875em' },
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

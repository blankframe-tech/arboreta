/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f5f2',
          100: '#d9e6dd',
          200: '#b8cfc0',
          300: '#8fb8a3',
          400: '#6b8e6f', // Sage Green
          500: '#4d6d54',
          600: '#2d4a35',
          700: '#1a472a', // Deep Forest Green
          800: '#0d2415',
          900: '#061409',
        },
        cream: {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#eae5df',
          300: '#d9cfbd',
          400: '#c4af95',
          500: '#b39a82',
          600: '#9a8473',
          700: '#7a6a5e',
          800: '#5a4d47',
          900: '#3a3430',
        },
        gold: {
          50: '#faf6f1',
          100: '#f3eadc',
          200: '#e7d5b8',
          300: '#d4a574',
          400: '#c89a5a',
          500: '#b68f50',
          600: '#a07f46',
          700: '#7a6038',
          800: '#5a472b',
          900: '#3d311e',
        },
        terracotta: '#c77a5a',
        blush: '#d8b8b0',
        charcoal: '#2a2a2a',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        accent: ['Cormorant Garamond', 'serif'],
      },
      fontSize: {
        'display-xl': ['56px', { lineHeight: '1.2', letterSpacing: '0.025em' }],
        'display-lg': ['40px', { lineHeight: '1.2', letterSpacing: '0.0125em' }],
        'display-md': ['28px', { lineHeight: '1.3' }],
        'display-sm': ['24px', { lineHeight: '1.3' }],
        'body-base': ['16px', { lineHeight: '1.6' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
        'body-xs': ['12px', { lineHeight: '1.4' }],
      },
      spacing: {
        '4.5': '1.125rem',
        '18': '4.5rem',
      },
      borderRadius: {
        'xs': '4px',
        'sm': '8px',
        'md': '10px',
        'lg': '12px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(26, 71, 42, 0.08)',
        'card-hover': '0 8px 24px rgba(26, 71, 42, 0.12)',
      },
      animation: {
        'leaf-spin': 'spin 1.5s linear infinite',
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
      },
    },
  },
  plugins: [],
};

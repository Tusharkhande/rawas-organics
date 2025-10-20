 /** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          rusty: {
            50: '#f8f6f4',
            100: '#ede7e2',
            200: '#ddd0c6',
            300: '#c8b3a3',
            400: '#b18d76',
            500: '#9d6b4f',
            600: '#8a5542',
            700: '#734536',
            800: '#5f392e',
            900: '#4d2f25',
          },
          earth: {
            50: '#f6f3f0',
            100: '#e9e2db',
            200: '#d7c6b7',
            300: '#c0a28a',
            400: '#a67c5a',
            500: '#8f5c3c',
            600: '#7a4930',
            700: '#653c28',
            800: '#533121',
            900: '#44281c',
          },
          copper: {
            50: '#f7f4f2',
            100: '#ece2dc',
            200: '#dcc4b8',
            300: '#c79e8b',
            400: '#b07660',
            500: '#9a5541',
            600: '#834335',
            700: '#6d352c',
            800: '#592d25',
            900: '#48251f',
          },
          bronze: {
            50: '#f5f3f1',
            100: '#e7e0db',
            200: '#d4c2b8',
            300: '#bc9c8c',
            400: '#a17862',
            500: '#8b5d44',
            600: '#774d39',
            700: '#633f30',
            800: '#523429',
            900: '#442c23',
          }
        },
        fontFamily: {
          'sans': ['Inter', 'system-ui', 'sans-serif'],
          'display': ['Playfair Display', 'serif'],
        },
        fontSize: {
          'xs': ['0.6rem', { lineHeight: '0.85rem' }],
          'sm': ['0.7rem', { lineHeight: '0.95rem' }],
          'base': ['0.8rem', { lineHeight: '1.15rem' }],
          'lg': ['0.9rem', { lineHeight: '1.25rem' }],
          'xl': ['1rem', { lineHeight: '1.4rem' }],
          '2xl': ['1.2rem', { lineHeight: '1.6rem' }],
          '3xl': ['1.45rem', { lineHeight: '1.85rem' }],
          '4xl': ['1.8rem', { lineHeight: '2.1rem' }],
          '5xl': ['2.2rem', { lineHeight: '2.5rem' }],
          '6xl': ['2.6rem', { lineHeight: '2.9rem' }],
          '7xl': ['3rem', { lineHeight: '3.3rem' }],
        },
        backgroundImage: {
          'organic-texture': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23d2bab0\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"3\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        }
      },
    },
    plugins: [],
  }
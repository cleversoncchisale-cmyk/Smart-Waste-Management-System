/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        forest: '#123D32',
        emerald: '#16A34A',
        teal: '#0D9488',
        mint: '#ECFDF5',
        charcoal: '#1F2937',
        graysoft: '#F3F4F6'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(18, 61, 50, 0.08)'
      }
    }
  },
  plugins: []
};

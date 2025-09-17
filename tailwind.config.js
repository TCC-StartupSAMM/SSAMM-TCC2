/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'background-start': '#F0F2F5',
        'background-end': '#E6E9ED',
        'card-background': 'rgba(255, 255, 255, 0.6)',
        'card-border': 'rgba(255, 255, 255, 0.8)',
        'text-primary': '#1F2937',
        'text-secondary': '#4B5563',
        'accent': '#3B82F6',
        'accent-hover': '#2563EB',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropFilter: {
        'blur': 'blur(10px)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
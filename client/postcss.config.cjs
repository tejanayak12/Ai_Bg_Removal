// postcss.config.cjs
module.exports = {
  plugins: [
    require('autoprefixer'), // Autoprefixer for cross-browser compatibility
    require('tailwindcss'),   // Ensure TailwindCSS is included as a PostCSS plugin
  ],
};

// Exporting the configuration for Tailwind CSS
module.exports = {
  // Specify the paths to all of the template files in your project
  content: [
    // Paths to all JS, TS, JSX, TSX files in the 'pages' directory
    './pages/**/*.{js,ts,jsx,tsx}',

    // Paths to all JS, TS, JSX, TSX files in the 'components' directory
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  // Define your custom theme here
  theme: {
    // Extend the default Tailwind CSS styles
    extend: {},
  },

  // Define your custom plugins here
  plugins: [],
}
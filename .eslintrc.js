module.exports = {
  parserOptions: {
    ecmaVersion: 2020, // or latest, to support ES6+ features
    sourceType: 'module', // Allows for the use of imports
  },
  env: {
    es6: true, // Adds all ECMAScript 6 globals and automatically sets the ecmaVersion parser option to 6
    browser: true, // Enables browser globals like `window` and `document`
    node: true, // Enables Node.js global variables and Node.js scoping
  },
  rules: {
    // Add custom rules here
  },
};

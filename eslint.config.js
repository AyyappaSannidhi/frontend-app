import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default {
  extends: [js.configs.recommended], // Use the recommended ESLint configuration for JS
  files: ['**/*.{js,jsx}'], // Adjusted to look at JS/JSX files instead of TS/TSX
  languageOptions: {
    ecmaVersion: 2020, // You can update this as needed for your JS features
    globals: globals.browser, // Assuming you're targeting browser environments
  },
  plugins: {
    'react-hooks': reactHooks, // React hooks plugin
    'react-refresh': reactRefresh, // React refresh plugin
  },
  rules: {
    ...reactHooks.configs.recommended.rules, // Include recommended React Hooks rules
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }, // You can customize this as per your needs
    ],
  },
  
};

module.exports = {
  rules: {
    'react/no-string-refs': 'error', // Or 'error' if you want to enforce it
  },
};
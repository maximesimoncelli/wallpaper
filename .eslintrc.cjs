/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:unicorn/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unicorn'],
  root: true,
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "env": {
    "es2024": true
  },
};
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    semi: 'off',
    'react/function-component-definition': 'off',
    'react/prop-types': 'off',
    'no-console': 'warn',
    'comma-dangle': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    'linebreak-style': 'off',
  },
}

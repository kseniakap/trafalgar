/* prettier-ignore */

module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'prettier', 'unicorn'],
  extends: [
    'plugin:@web-bee-ru/react',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [['~', './src/']],
        extensions: ['.ts', '.js', '.tsx'],
      },
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-key': ['error', {
      checkFragmentShorthand: true,
    }],
  },
  overrides: [
  ],
};

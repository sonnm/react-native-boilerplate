const prettier = require('./.prettierrc.js');

module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    '@react-native-community',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  globals: {
    __DEV__: true,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'prettier', 'no-autofix'],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  rules: {
    'arrow-body-style': 'off',
    'no-autofix/arrow-body-style': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx', '.json', '.native.js'],
      },
    ],
    'prettier/prettier': ['error', prettier],
  },
};

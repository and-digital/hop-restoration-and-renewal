module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    graphql: false,
    process: false,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2019,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'eslint-config-prettier',
    'plugin:react/recommended',
  ],
}

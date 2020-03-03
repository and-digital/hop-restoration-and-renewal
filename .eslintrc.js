module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  globals: {
    exports: true,
    module: true,
    require: true,
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
    'plugin:jest/recommended',
  ],
}

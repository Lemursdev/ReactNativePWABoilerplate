module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:mocha/recommended', 'eslint:recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'mocha'],
  rules: {
    "no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": false }],
    "mocha/no-skipped-tests": "error",
    "mocha/no-exclusive-tests": "error",
  }
};

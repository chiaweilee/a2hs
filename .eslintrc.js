module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true
  },
  'extends': [
    'plugin:flowtype/recommended',
    'eslint:recommended'
  ],
  plugins: [
    'flowtype'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module'
  }
}

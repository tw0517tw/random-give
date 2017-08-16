module.exports = {
  parser: 'babel-eslint',
  extends: ['yoctol', 'prettier'],
  env: {
    browser: true,
    node: true,
    jest: true,
    jasmine: true,
  },
  plugins: ['prettier', 'react'],
  rules: {
    'comma-dangle': 'off',
    'consistent-return': 'off',
    'no-await-in-loop': 'off',
    'no-mixed-operators': 'off',
    'no-param-reassign': 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
      },
    ],
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-indent': 'off',
  },
};

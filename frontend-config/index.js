module.exports = {
  'extends': [
    './core.js',
    './flowtype.js',
    './fp.js',
    './import.js',
    './jsx-a11y.js',
    './react.js',
  ],
  'env': {
    'browser': true,
    'es6': true,
  },
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true,
    },
    'sourceType': 'module',
  },
};

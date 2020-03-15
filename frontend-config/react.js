module.exports = {
  'plugins': [
    'react',
  ],

  'rules': {
    // Start React
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': ['error', { 'skipUndeclared': true }],
    'react/no-children-prop': 'error',
    'react/no-array-index-key': 'error',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-multi-comp': ['error', { 'ignoreStateless': true }],
    'react/no-set-state': 'error',
    'react/no-string-refs': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    // This is set to warning as it alerts
    // false positives.
    'react/no-unused-prop-types': 'warn',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-stateless-function': 'error',
    'react/self-closing-comp': ['error', {
      'component': true,
      'html': true
    }],
    'react/style-prop-object': 'error',
    // End React

    // Start JSX
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-curly-spacing': ['error', 'never', {'allowMultiline': false}],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-handler-names': ['warn', {
      'eventHandlerPrefix': 'handle',
      'eventHandlerPropPrefix': 'on',
    }],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': ['error', { 'maximum': 1 }],
    'react/jsx-no-bind': ['error', {
      'ignoreRefs': true,
      'allowArrowFunctions': true,
      'allowBind': false
    }],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-literals': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-space-before-closing': ['error', 'never'],
    'react/jsx-wrap-multilines': 'error',
    // End JSX
  },

};

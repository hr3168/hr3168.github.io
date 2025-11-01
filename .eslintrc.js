module.exports = {
  extends: ['@upstatement/eslint-config'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'no-console': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_|^Styled|^styled|^React$|Heading|Section|Img|Button|Icon',
        ignoreRestSiblings: true,
      },
    ],
  },
};

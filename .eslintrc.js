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
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^[A-Z]',
        ignoreRestSiblings: true,
      },
    ],
  },
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb', 'prettier', 'eslint:recommended', 'next'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: '12',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'prettier/prettier': 0,
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'no-throw-literal': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
  },
}

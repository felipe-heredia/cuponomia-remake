module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'max-len': ['error', { code: 340 }],
    'linebreak-style': 0,
    'no-param-reassign': [2, { props: false }],
    'no-unused-vars': 'warn',
    'vue/multi-word-component-names': 'off',
    'array-callback-return': 'off',
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      rules: {
        'vue/max-attributes-per-line': 'off',
        'max-len': 'off',
      },
      env: {
        jest: true,
      },
    },
  ],
}

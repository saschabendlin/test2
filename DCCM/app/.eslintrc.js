module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'standard',
    'plugin:vue/recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': 'off', // disables line length check,
    'import/newline-after-import': 0,
    'eol-last': ["off", "never"],
    "semi": ["off", "always"],
    "quotes": ["off", "single"],
    "vue/max-attributes-per-line": "off",
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "any",
        "normal": "any",
        "component": "any"
      },
      "svg": "always",
      "math": "always",
      "indent": [2, "tab"]
    }]
  },
  parserOptions: {
    parser: 'babel-eslint',
    "sourceType": "module",
    "allowImportExportEverywhere": false,
    "codeFrame": false
  }
}

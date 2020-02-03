module.exports = {
  parser: '@typescript-eslint/parser', // Typescript parser for ESLint
  parserOptions: {
    ecmaVersion: 2019,
    project: './tsconfig.json',
  },
  env: {
    node: 'true',
    mocha: 'true',
  },
  plugins: [
    '@typescript-eslint',
    'security',
  ],
  extends: [
    'airbnb-typescript/base', // Airbnb style guide rules
    'plugin:@typescript-eslint/recommended', // ESLint Typescript plugin recommended rules
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // Additional type-checking rules
    'plugin:security/recommended', // Security rules
  ],
  rules: {
    'max-len': 'off', // Disable default max line length of 100
    'no-console': 'off', // Allow console logging for dev/test purposes
    'no-plusplus': 'off', // Allow use of ++/-- operators given issues are extremely edge case
    'import/prefer-default-export': 'off', // Allow named exports where there is only one module export
    '@typescript-eslint/no-use-before-define': 'off', // Allow defining functions (incl. arrow expressions) after use as per 'Stepdown Rule' best practice
    'no-param-reassign': ['error', { 'props': false }], // Allow reassigning parameter properties but not whole parameters
    '@typescript-eslint/unbound-method': ['error', { 'ignoreStatic': true }], // Allow referencing unbound methods as long as they are static
  },
}

module.exports = {
  parser: '@typescript-eslint/parser', // Typescript parser for ESLint
  parserOptions: {
    ecmaVersion: 2019,
    project: './tsconfig.json',
  },
  env: {
    node: 'true',
    jest: 'true'
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
    "class-methods-use-this": "off", // Stops us from having to delcare class methods which don't use this as static.
    "@typescript-eslint/interface-name-prefix": "off", // Interfaces don't have to start with a I
    "lines-between-class-members": "off", // Allows you to not have a blank line between class members
    "import/no-unresolved": "off", // Allows you to use imports which can't be resolved. For example @azure/functions
    "@typescript-eslint/no-explicit-any": "off", // Allows you to use the any type
  },
}

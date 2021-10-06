module.exports = {
  parser: '@typescript-eslint/parser', // Typescript parser for ESLint
  parserOptions: {
    ecmaVersion: 2019,
    project: './tsconfig.json',
  },
  env: {
    jest: 'true',
    node: 'true'
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'security'
  ],
  extends: [
    'airbnb-typescript/base', // Airbnb style guide rules
    'plugin:@typescript-eslint/recommended', // ESLint Typescript plugin recommended rules
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // Additional type-checking rules
    'plugin:import/typescript', // ESLint Typescript Import plugin
    'plugin:security/recommended' // Security rules
  ],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off', // Interfaces don't have to start with a I
    '@typescript-eslint/no-use-before-define': 'off', // Allow defining functions (incl. arrow expressions) after use as per 'Stepdown Rule' best practice
    '@typescript-eslint/unbound-method': [
      'error', 
      { 'ignoreStatic': true }
    ], // Allow referencing unbound methods as long as they are static
    'class-methods-use-this': 'off', // Stops us from having to declare class methods which don't use this as static.
    'eol-last': 2, // Enforces that files end with a newline 
    'import/no-unresolved': [ // Allows you to use imports which can't be resolved, enabled for everything not in the ignore list.
      2,
      { 'ignore': ['@azure/functions'] } 
    ],
    'import/prefer-default-export': 'off', // Allow named exports where there is only one module export
    'max-len': 'off', // Disable default max line length of 100
    'no-console': 'off', // Allow console logging for dev/test purposes
    'no-plusplus': 'off', // Allow use of ++/-- operators given issues are extremely edge case
    'no-param-reassign': [
      'error', 
      { 'props': false }
    ] // Allow reassigning parameter properties but not whole parameters
  },
}

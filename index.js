module.exports = {
  // Typescript parser for ESLint
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    project: './tsconfig.json',
  },
  env: {
    jest: true,
    node: true
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'security',
    'jest'
  ],
  extends: [
    // Airbnb style guide rules
    'airbnb-base',
    'airbnb-typescript/base',
    // ESLint Typescript plugin recommended rules
    'plugin:@typescript-eslint/recommended',
    // Additional type-checking rules
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // ESLint Typescript Import plugin
    'plugin:import/typescript',
    // Security rules
    'plugin:security/recommended',
    // Jest rules
    'plugin:jest/recommended',
    'plugin:jest/style'
  ],
  overrides: [
    // @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
    {
      // Only turn the original rule off for test files.
      'files': ['tests/**', 'test/**'],
      'plugins': ['jest'],
      'rules': {
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error'
      }
    }
  ],
  rules: {
    // Interfaces don't have to start with a I
    '@typescript-eslint/interface-name-prefix': 'off',
    // Allow defining functions (incl. arrow expressions) after use as per 'Stepdown Rule' best practice
    '@typescript-eslint/no-use-before-define': 'off',
    // Allow referencing unbound methods as long as they are static
    '@typescript-eslint/unbound-method': [
      'error',
      { 'ignoreStatic': true }
    ],
    // Stops us from having to declare class methods which don't use this as static.
    'class-methods-use-this': 'off',
    // Enforces that files end with a newlines
    'eol-last': 2,
    // Allows you to use imports which can't be resolved, enabled for everything not in the ignore list.
    'import/no-unresolved': [
      2,
      { 'ignore': ['@azure/functions'] }
    ],
    // Allow named exports where there is only one module export
    'import/prefer-default-export': 'off',
    // Disable default max line length of 100
    'max-len': 'off',
    // Allow console logging for dev/test purposes
    'no-console': 'off',
    // Allow use of ++/-- operators given issues are extremely edge case
    'no-plusplus': 'off',
    // Allow reassigning parameter properties but not whole parameters
    'no-param-reassign': [
      'error',
      { 'props': false }
    ],
    // @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-top-level-describe.md
    'jest/require-top-level-describe': 'error',
    // @see https://github.com/jest-community/eslint-plugin-jest/blob/v25.3.0/docs/rules/no-hooks.md
    // Enable use of hooks (beforeEach/afterEach) - state is useful in most testsuites
    'jest/no-hooks': 'off',
  },
}

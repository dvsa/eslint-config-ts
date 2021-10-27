# eslint-config-ts

Shareable ESLint config for use in Node/Typescript projects.

### Why?
Rather than having to copy linter config files across code repos of the same project/tech stack, can pull in a standard shared config and dependencies from a single place and manage any changes/updates centrally.

### Rules
This config uses:
- Airbnb style guide rules (adapted for Typescript): https://github.com/airbnb/javascript
- ESLint Typescript plugin recommended rules: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
- ESLint security plugin rules: https://github.com/nodesecurity/eslint-plugin-security

A few of the default rules are switched off/customised as specified in the config in `index.js`.

### Developers
When making changes to this package you are unable to npm link to test the package locally due a bug in npm where peer dependencies are not installed. Github Issue - https://github.com/npm/cli/issues/2339

### Prerequisites
- >= npm 7.x.x
- The following dependencies are not present in your package.json (this package will install them)
-- eslint
-- @typescript-eslint/eslint-plugin
-- @typescript-eslint/typescript-estree
-- eslint-config-airbnb-typescript
-- eslint-plugin-import
-- eslint-plugin-jsx-a11y
-- eslint-plugin-react
-- eslint-plugin-react-hooks
-- eslint-plugin-security

### Usage

1. Install the config in your project.
`npm install --save-dev @dvsa/eslint-config-ts`

2. Add a `.eslintrc` to your project root extending the config:
```
{
	"extends": "@dvsa/eslint-config-ts"
}
```

If you need to override the shared config in any way to suit your specific project, for example by customising certain rules, you can do so here. See the [ESLint documentation](https://eslint.org/docs/user-guide/configuring  "ESLint documentation") for details.

3. Add a `.eslintignore` to specify any project directories/files to exclude from the linter. ESLint already ignores `node_modules` by default.

4. Run the linter:
`(npx) eslint --ext .js,.ts .`

The `--ext` option is required to tell ESLint to lint `.ts` files (lints only `.js` by default) and `.` specifies the files/directory to lint.

If you are using VSCode, you can add the ESLint extension to see lint issues as you type. You might also want to add a pre-push hook to your project such that the linter runs on pushing code and fails the push if there are unresolved issues. 

------------
This shared config was originally made by the FTTS (Future Theory Test Service) team for use across our different project repos using a Node/Typescript/Jest stack. To suit your project you may need to configure the `env` property in your `.eslintrc` for your specific tech stack.
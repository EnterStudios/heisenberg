# Heisenberg 🦄
Heisenberg is a modern build setup, inspired by [Create react app](https://github.com/facebookincubator/create-react-app/).

Heisenberg works on macOS, Windows, and Linux.<br />
If something doesn’t work please [file an issue](https://github.com/DekodeInteraktiv/heisenberg/issues/new).

## Table of Contents
- [Available Scripts](#available-scripts)
  - [yarn start](#yarn-start)
  - [yarn test](#yarn-test)
  - [yarn build](#yarn-build)
- [Proxy](#proxy)
- [Editor style](#editor-style)
- [Using Global Variables](#using-global-variables)
- [Custom linting rules](#custom-linting-rules)
- [Adding Flow](#adding-flow)
- [Running Tests](#running-tests)
  - [Filename Conventions](#filename-conventions)
  - [Command Line Interface](#command-line-interface)
  - [Version Control Integration](#version-control-integration)
  - [Initializing Test Environment](#initializing-test-environment)
  - [Focusing and Excluding Tests](#focusing-and-excluding-tests)
  - [Coverage Reporting](#coverage-reporting)
  - [Continuous Integration](#continuous-integration)
  - [Disabling jsdom](#disabling-jsdom)

## Available Scripts
In the project directory, you can run:

### `yarn start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

To run the development task it is required to define the [`proxy`](#proxy)
field in `package.json`.

### `yarn test`
Launches the test runner in the interactive watch mode.

### `yarn build`
Builds the app for production to the `dist` folder.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

If you don't want the files to be hashed you can add `--no-filename-hashes` to
the script in `package.json`.

```js
  // ...
  "scripts": {
    // ...
    "build": "heisenberg-scripts build --no-filename-hashes"
  }
```

## Proxy
The development mode is proxying an existing vhost. It will wrap your vhost
with a proxy URL to view your site.

To define the proxy add a `proxy` field to your `package.json`, for example:

```json
"proxy": "http://local-url.dev",
```

## Editor style
In WordPress you can create a separate TinyMCE editor style, but WordPress does
not need this front-end, so you don't want to add this to the entry key. To
create a editor file on `build` add this to your `package.json`:

```json
"editor": "./src/editor.scss",
```

## Using Global Variables
When you include a script in the HTML file that defines global variables and
try to use one of these variables in the code, the linter will complain because
it cannot see the definition of the variable.

You can avoid this by reading the global variable explicitly from the `window`
object, for example:

```js
const $ = window.$;
```

This makes it obvious you are using a global variable intentionally rather than
because of a typo.

Alternatively, you can force the linter to ignore any line by adding
`// eslint-disable-line` after it.

## Custom linting rules
Heisenberg comes with a default set of [stylelint](https://stylelint.io/) and
[ESLint](https://eslint.org/) rules. These can however be overwritten in your
project. To create your own config create a `.stylelintrc.js` or `.eslintrc.js`
in the same folder your `package.json` file exists. Heisenberg will now use
these files when linting your scss/js code.

## Adding Flow
Flow is a static type checker that helps you write code with fewer bugs. Check
out this [introduction to using static types in JavaScript](https://medium.com/@preethikasireddy/why-use-static-types-in-javascript-part-1-8382da1e0adb)
if you are new to this concept.

Recent versions of [Flow](http://flowtype.org/) work with Heisenberg projects
out of the box.

To add Flow to a Heisenberg project, follow these steps:

1. Run `yarn add --dev flow-bin`.
2. Add `"flow": "flow"` to the `scripts` section of your `package.json`.
3. Run `yarn flow -- init` to create a [`.flowconfig` file](https://flowtype.org/docs/advanced-configuration.html) in the root directory.
4. Add `// @flow` to any files you want to type check (for example, to `src/main.js`).

Now you can run `yarn flow` to check the files for type errors.

To learn more about Flow, check out [its documentation](https://flowtype.org/).

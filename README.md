# serverless-rest-api-example@1.1.0
 [![npm version](https://badge.fury.io/js/serverless-rest-api-example.svg)](https://npmjs.org/package/serverless-rest-api-example)  [![build status](https://travis-ci.org/wscholar/serverless.svg)](https://travis-ci.org/wscholar/serverless)  [![coverage status](https://coveralls.io/repos/wscholar/serverless/badge.svg)](https://coveralls.io/github/wscholar/serverless)  [![dependency status](https://david-dm.org/wscholar/serverless.svg?theme=shields.io)](https://david-dm.org/wscholar/serverless)  [![devDependency status](https://david-dm.org/wscholar/serverless/dev-status.svg)](https://david-dm.org/wscholar/serverless#info=devDependencies)  [![Gitter](https://badges.gitter.im/wscholar/serverless.svg)](https://gitter.im/wscholar/serverless) 

This is an example serverless rest api example that uses aws dynamodb and dynamodb streams. This example is configured with a number of plugins and standards for checking code standards.  It also handles authentication via Auth0 and json validation.  Free free to reach out with any comments / questions.


## Installation
Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install
```

```sh
npm run offline
```
  

## Dependencies

- [ajv](https://github.com/epoberezkin/ajv): Another JSON Schema Validator
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken): JSON Web Token implementation (symmetric and asymmetric)
- [serverless-domain-manager](https://github.com/amplify-education/serverless-domain-manager): Serverless plugin for managing custom domains with API Gateways.
- [uuid](https://github.com/defunctzombie/node-uuid): Rigorous implementation of RFC4122 (v1 and v4) UUIDs.


## Dev Dependencies

- [babel-eslint](https://github.com/babel/babel-eslint): Custom parser for ESLint
- [babel-loader](https://github.com/babel/babel-loader): babel module loader for webpack
- [babel-plugin-transform-flow-strip-types](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-flow-strip-types): Strip flow type annotations from your output code.
- [babel-plugin-transform-runtime](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-runtime): Externalise references to helpers and builtins, automatically polyfilling your code without polluting globals
- [babel-preset-env](https://github.com/babel/babel-preset-env): A Babel preset for each environment.
- [babel-preset-flow](https://github.com/babel/babel/tree/master/packages/babel-preset-flow): Babel preset for all Flow plugins.
- [eslint](https://github.com/eslint/eslint): An AST-based pattern checker for JavaScript.
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier): Turns off all rules that are unnecessary or might conflict with Prettier.
- [eslint-loader](https://github.com/webpack-contrib/eslint-loader): eslint loader (for webpack)
- [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype): Flowtype linting rules for ESLint.
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier): Runs prettier as an eslint rule
- [husky](https://github.com/typicode/husky): Prevents bad commit or push (git hooks, pre-commit/precommit, pre-push/prepush, post-merge/postmerge and all that stuff...)
- [jest](https://github.com/facebook/jest): Delightful JavaScript Testing.
- [lint-staged](https://github.com/okonet/lint-staged): Lint files staged by git
- [npm-git-secrets](https://github.com/lm-tools/npm-git-secrets): installs and configures git secrets
- [prettier](https://github.com/prettier/prettier): Prettier is an opinionated code formatter
- [prettier-eslint](https://github.com/prettier/prettier-eslint): Formats your JavaScript using prettier followed by eslint --fix
- [serverless](https://github.com/serverless/serverless): Serverless Framework - Build web, mobile and IoT applications with serverless architectures using AWS Lambda, Azure Functions, Google CloudFunctions & more
- [serverless-aws-documentation](https://github.com/9cookies/serverless-aws-documentation): Serverless 1.0 plugin to add documentation and models to the serverless generated API Gateway
- [serverless-dynamodb-local](https://github.com/99xt/serverless-dynamodb-local): Serverless dynamodb local plugin
- [serverless-jest-plugin](https://github.com/sc5/serverless-jest-plugin): Serverless plugin for test driven development using Jest
- [serverless-offline](https://github.com/dherault/serverless-offline): Emulate AWS λ and API Gateway locally when developing your Serverless project
- [serverless-plugin-offline-dynamodb-stream](https://github.com/orchestrated-io/serverless-plugin-offline-dynamodb-stream): Serverless framework offline plugin to support dynamodb stream
- [serverless-webpack](https://github.com/serverless-heaven/serverless-webpack): Serverless plugin to bundle your javascript with Webpack
- [webpack](https://github.com/webpack/webpack): Packs CommonJs/AMD modules for the browser. Allows to split your codebase into multiple bundles, which can be loaded on demand. Support loaders to preprocess files, i.e. json, jsx, es7, css, less, ... and your custom stuff.
- [webpack-node-externals](https://github.com/liady/webpack-node-externals): Easily exclude node_modules in Webpack bundle


## License
[MIT]()

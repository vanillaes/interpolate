[![GitHub Releases](https://img.shields.io/github/release/vanillaes/interpolate-es.svg)](https://github.com/vanillaes/interpolate-es/releases)
[![NPM Release](https://img.shields.io/npm/v/interpolate-es.svg)](https://www.npmjs.com/package/interpolate-es)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/vanillaes/interpolate-es/master/LICENSE)
[![Latest Status](https://github.com/vanillaes/interpolate-es/workflows/Latest/badge.svg)](https://github.com/vanillaes/interpolate-es/actions)
[![Release Status](https://github.com/vanillaes/interpolate-es/workflows/Release/badge.svg)](https://github.com/vanillaes/interpolate-es/actions)

# interpolate-es

A small, easy-to-use template literal builder. Good for loading template literal strings from external sources.

- ECMAScript Module
- CommonJS Bundle Included
- Typescript Compatible
- Tiny Footprint (1K)

## Installation

```sh
npm install interpolate-es
```

```javascript
import Interpolate from 'interpolate-es';
```

## Interpolate()

Builds a string from a template string + tags collection.

### Arguments

```Interpolate(template, {tags})```

- template - the template literal string
- tags - the tagged values in the template

## CommonJS

A `.cjs` bundle is included for CommonJS compatibility 

```javascript
const Interpolate = require('interpolate-es');
```

## Typings

Typings are generated from JSDoc using Typescript. They are 100% compatible with VSCode Intellisense and will work seamlessly with Typescript.
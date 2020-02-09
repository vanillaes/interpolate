<h1 align="center">Interpolate-ES</h1>

A small, easy-to-use template literal builder. Good for loading template literal strings from external sources.

[![GitHub Releases](https://badgen.net/github/tag/vanillaes/interpolate-es)](https://github.com/vanillaes/interpolate-es/releases)
[![NPM Release](https://badgen.net/npm/v/interpolate-es)](https://www.npmjs.com/package/interpolate-es)
[![Bundlephobia](https://badgen.net/bundlephobia/minzip/interpolate-es)](https://bundlephobia.com/result?p=interpolate-es)
[![MIT License](https://badgen.net/github/license/vanillaes/interpolate-es)](https://raw.githubusercontent.com/vanillaes/interpolate-es/master/LICENSE)
[![Latest Status](https://github.com/vanillaes/interpolate-es/workflows/Latest/badge.svg)](https://github.com/vanillaes/interpolate-es/actions)
[![Release Status](https://github.com/vanillaes/interpolate-es/workflows/Release/badge.svg)](https://github.com/vanillaes/interpolate-es/actions)

<p align="center"><strong>⚠️ Notice: EcmaScript Module Support in Node is Experimental ⚠️</strong></p>

# features

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
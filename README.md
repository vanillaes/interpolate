<h1 align="center">Interpolate</h1>

A small, easy-to-use template literal builder. Good for loading template literal strings from external sources.

[![GitHub Releases](https://badgen.net/github/tag/vanillaes/interpolate)](https://github.com/vanillaes/interpolate/releases)
[![NPM Release](https://badgen.net/npm/v/@vanillaes/interpolate)](https://www.npmjs.com/package/@vanillaes/interpolate)
[![Bundlephobia](https://badgen.net/bundlephobia/minzip/@vanillaes/interpolate)](https://bundlephobia.com/result?p=@vanillaes/interpolate)
[![MIT License](https://badgen.net/github/license/vanillaes/interpolate)](https://raw.githubusercontent.com/vanillaes/interpolate/master/LICENSE)
[![Latest Status](https://github.com/vanillaes/interpolate/workflows/Latest/badge.svg)](https://github.com/vanillaes/interpolate/actions)
[![Release Status](https://github.com/vanillaes/interpolate/workflows/Release/badge.svg)](https://github.com/vanillaes/interpolate/actions)

# features

- ECMAScript Module
- CommonJS Bundle Included
- Typescript Compatible
- Tiny Footprint (1K)

## Installation

```sh
npm install @vanillaes/interpolate
```

```javascript
import Interpolate from '@vanillaes/interpolate';
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
const Interpolate = require('@vanillaes/interpolate');
```

## Typings

Typings are generated from JSDoc using Typescript. They are 100% compatible with VSCode Intellisense and will work seamlessly with Typescript.
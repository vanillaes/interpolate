<h1 align="center">Interpolate</h1>

A small, easy-to-use template literal builder. Good for loading template literal strings from external sources.

<div align="center">
  <a href="https://github.com/vanillaes/interpolate/releases"><img src="https://badgen.net/github/tag/vanillaes/interpolate" alt="GitHub Release"></a>
  <a href="https://www.npmjs.com/package/@vanillaes/interpolate"><img src="https://badgen.net/npm/v/@vanillaes/interpolate" alt="NPM Release"></a>
  <a href="https://bundlephobia.com/result?p=@vanillaes/interpolate"><img src="https://badgen.net/bundlephobia/minzip/@vanillaes/interpolate" alt="Bundlephobia"></a>
  <a href="https://github.com/vanillaes/interpolate/actions"><img src="https://github.com/vanillaes/interpolate/workflows/Latest/badge.svg" alt="Latest Status"></a>
  <a href="https://github.com/vanillaes/interpolate/actions"><img src="https://github.com/vanillaes/interpolate/workflows/Release/badge.svg" alt="Release Status"></a>
</div>

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
import interpolate from '@vanillaes/interpolate';
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
const interpolate = require('@vanillaes/interpolate').interpolate;
```

## Typings

Typings are generated from JSDoc using Typescript. They are 100% compatible with VSCode Intellisense and will work seamlessly with Typescript.
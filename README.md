<h1 align="center">Interpolate</h1>

A small, easy-to-use template literal builder. Good for loading template literal strings from external sources.

<div align="center">
  <a href="https://github.com/vanillaes/interpolate/releases"><img src="https://badgen.net/github/tag/vanillaes/interpolate" alt="GitHub Release"></a>
  <a href="https://www.npmjs.com/package/@vanillaes/interpolate"><img src="https://badgen.net/npm/v/@vanillaes/interpolate" alt="NPM Release"></a>
  <a href="https://bundlephobia.com/result?p=@vanillaes/interpolate"><img src="https://badgen.net/bundlephobia/minzip/@vanillaes/interpolate" alt="Bundlephobia"></a>
  <a href="https://github.com/vanillaes/interpolate/actions"><img src="https://github.com/vanillaes/interpolate/workflows/Latest/badge.svg" alt="Latest Status"></a>
  <a href="https://github.com/vanillaes/interpolate/actions"><img src="https://github.com/vanillaes/interpolate/workflows/Release/badge.svg" alt="Release Status"></a>

  <a href="https://discord.gg/aSWYgtybzV"><img alt="Discord" src="https://img.shields.io/discord/723296249121603604?color=%23738ADB"></a>
</div>

# Features

- ECMAScript Module
- Typescript Compatible
- Tiny Footprint (1K)

## Imports

This package works isomorphically in browser and server-side JavaScript

### Browser

Import directly from the local path or a CDN

```html
<script type="module">
import { interpolate } from 'path/to/interpolate/index.js'
</script>
```

The minified version can be imported from

```html
<script type="module">
import { interpolate } from 'path/to/interpolate/index.min.js'
</script>
```

### Node

Install the package

```sh
npm install @vanillaes/interpolate
```

Import using the module path

```javascript
import { interpolate } from '@vanillaes/interpolate'
```

## Interpolate()

Builds a string from a template string + tags collection.

### Arguments

```Interpolate(template, {tags})```

- template - the template literal string
- tags - the tagged values in the template

## Typings

Typings are generated from JSDoc using Typescript. They are 100% compatible with VSCode Intellisense and will work seamlessly with Typescript.
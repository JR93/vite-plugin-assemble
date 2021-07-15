# vite-plugin-assemble

[![NPM version](https://img.shields.io/npm/v/vite-plugin-assemble.svg?style=for-the-badge)](https://npmjs.com/package/vite-plugin-assemble)

> Vite plugin for [Assemble](https://github.com/assemble/assemble).

## Install

```bash
yarn add vite-plugin-assemble -D
```

## Usage

```js
import path from 'path'
import assemble from 'vite-plugin-assemble'

export default {
  plugins: [
    assemble({
      layouts: path.resolve('./src/pages/layouts/**/*.hbs'),
      partials: path.resolve('./src/pages/partials/**/*.hbs'),
      define: {
        __TEST__: true
      }
    }),
  ],
}
```

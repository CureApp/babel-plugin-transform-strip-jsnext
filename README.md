# babel-plugin-transform-strip-jsnext

[![npm version](https://img.shields.io/npm/v/babel-plugin-transform-strip-jsnext.svg)](https://www.npmjs.org/package/babel-plugin-transform-strip-jsnext)
[![npm downloads](https://img.shields.io/npm/dm/babel-plugin-transform-strip-jsnext.svg)](https://www.npmjs.org/package/babel-plugin-transform-strip-jsnext)

A babel plugin to strip '/jsnext' path from importing module names.
Used to switch entry point in production.

Before:

```js
import foo from 'some-package/jsnext'
import bar from 'another-package/jsnext-foo-bar'
```

After:

```js
import foo from 'some-package'
import bar from 'another-package/jsnext-foo-bar'
```

> ## Concept
It's similar to [rollup.js](http://rollupjs.org/)'s [jsnext:main](https://github.com/rollup/rollup/wiki/jsnext:main).
It's designed for switching entry points of your microservices of babel / flow-typed npm modules.

```text
└─┬ your-service1
  ├── your-module1 (ES module)
    ├── your-module2 (ES module)
```
You may want to use untranspiled codes of `your modules1` and `your modules2` in developing `your service1` for type.
However, simply importing untranspiled codes will not go well in generating transpiled files.

```sh
babel src -d dist
```
It cannot transform `node_modules/*` by default and fails.

Then, let's add `jsnext` entry.


The skeleton of your module 1/2 will be like the following.
```text
├── index.js (transpiled entry point)
├── jsnext.js (untranspiled entry point)
 ...
```

You can import the untranspiled code with `/jsnext`
```js
import mod1 from 'your-module1/jsnext'
```

In the transpilation phase, the `/jsnext` will be stripped by this transform.



## Installation

```sh
$ npm install babel-plugin-transform-strip-jsnext
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-strip-jsnext"]
}
```

### Via CLI

```sh
$ babel --plugins transform-strip-jsnext script.js
```

### Via Node API

```js
require('babel-core').transform('code', {
    plugins: ['transform-strip-jsnext']
});
```

## License

MIT

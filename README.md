# wenyan-loader

Webpack loader for wenyan-lang

## Install

```bash
npm i -D @wenyanlang/{loader,core}
```

## Webpack Config

```js
// webpack.config.js
module.exports = {
  // ...options
  module: {
    rules: [
      {
        test: /\.wy$/,
        use: [
          {
            loader: '@wenyanlang/loader',
            options: {
              // options of wenyan.compile
              strict: true,
              romanizeIdentifiers: 'pinyin',
              // ...etc
            }
          }
        ]
      }
    ]
  }
};
```

The options field well passed to the wenyan `compile` function. Check [this doc](https://github.com/wenyan-lang/wenyan/wiki/Compiler-API#compiler-options) for details.

## Usage

You can simpily make the `entry` of webpack to `.wy` scripts or require as js modules.

```js
// webpack.config.js
module.exports = {
  // ...options
  entry: './src/圖靈機.wy',
}
```

or 

```js
// some js scripts
const turing = require('./圖靈機.wy')
```

You can also check out the [examples](./examples).

## TODO

- [ ] A code name
- [ ] 藏书楼, current entry
- [ ] Unit tests
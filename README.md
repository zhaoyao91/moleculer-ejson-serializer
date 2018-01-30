# Moleculer EJSON Serializer

Serialize data with [EJSON](https://github.com/primus/ejson).

## Why?

The default JSON serializer does not handle `Date` type well, while this package does.

## Current Version (v1.0.0)

- support [moleculer ^0.11.x](https://github.com/ice-services/moleculer)

## Install

`npm install --save moleculer-ejson-serializer`

## Usage

```js
// moleculer.config.js

const Serializer = require('moleculer-ejson-serializer')

module.exports = {
  ...
  serializer: new Serializer()
}
```

## License

MIT
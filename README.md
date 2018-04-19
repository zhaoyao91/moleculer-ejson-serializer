# Moleculer EJSON Serializer

Serialize data with [EJSON](https://github.com/primus/ejson).

## Why?

The default JSON serializer does not handle

- Date
- NaN
- Infinity

while this package does.

## Current Version (v1.0.2)

- support [moleculer >= 0.11.0](https://github.com/ice-services/moleculer)

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
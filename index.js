const BaseSerializer = require('moleculer/src/serializers/base')
const EJSON = require('ejson')

class EJSONSerializer extends BaseSerializer {
  serialize (obj) {
    return Buffer.from(EJSON.stringify(obj))
  }

  deserialize (buf) {
    return EJSON.parse(buf.toString())
  }
}

module.exports = EJSONSerializer
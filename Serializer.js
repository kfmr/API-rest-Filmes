const NotSupported = require('./erros/NotSupported')

class Serializer {
    // transformar os dados em JSON
    json(data) {
        return JSON.stringify(data)
    }
    serialize(data) {
        if (this.contentType === 'application/json') {
            return data
        }
        throw new NotSupported(this.contentType)
    }
}

class SerializeResponse extends Serializer {
    constructor(contentType) {
        // extende as funcionalidades
        super()
        this.contentType = contentType
    }
}
module.exports = {
    Serializer: Serializer,
    validFormat: ['application/json'],
    SerializeResponse: SerializeResponse
}
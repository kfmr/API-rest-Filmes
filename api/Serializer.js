const NotSupported = require('../erros/NotSupported')
const jsontoxml = require('jsontoxml')
class Serializer {
    // transformar os dados em JSON
    json(data) {
        return JSON.stringify(data)
    }

    xml(data) {
        return jsontoxml({
            [this.tag]: data
        })


    }
    serialize(data) {
        data = this.filterData(data)
        if (this.contentType === 'application/json') {
            return this.json(this.filterData(data))
        } else if (this.contentType === 'application/xml') {
            return this.xml(data)

        }
        throw new NotSupported(this.contentType)
    }
    filterObj(data) {
        const newObj = {}
        // itera pela lista e verifica se o objeto possui os itens da lista como atributo, se sim o newobj recebe o atributo
        this.publicFields.forEach((field) => {
            if (data.hasOwnProperty(field)) {
                newObj[field] = data[field]

            }
        })
        return newObj
    }
    filterData(data) {
        if (Array.isArray(data)) {
            data = data.map(item => this.filterObj(item))
        } else {
            data = this.filterObj(data)
        }
        return data
    }
}

class SerializeResponse extends Serializer {
    constructor(contentType) {
        // extende as funcionalidades
        super()
        this.contentType = contentType
        this.publicFields = ["id", "nome", "genero", "diretor"]
        this.tag = 'register'

    }
}
class SerializerErro extends SerializeResponse {
    constructor(contentType) {
        super()
        this.contentType = contentType
        this.publicFields.concat(extraFields)
        this.tag = 'error'
    }
}

class SerializerAtor extends SerializeResponse {
    constructor(contentType, extraFields) {
        super()
        this.contentType = contentType
        this.publicFields = ['id', 'nome', 'idade', 'nacionalidade'].concat(extraFields) || []
        this.tagSingular = 'ator'
        this.tagPlural = 'atores'

    }
}
const validFormat = ['application/json', 'application/xml']

module.exports = {
    Serializer: Serializer,
    validFormat: validFormat,
    SerializeResponse: SerializeResponse,
    SerializerErro: SerializerErro,
    SerializerAtor: SerializerAtor
}
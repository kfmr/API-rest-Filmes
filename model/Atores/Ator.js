const atorSchema = require('../../controllers/Atores/tableAtores')
const NotFound = require('../../erros/NotFound')
const NotEmpty = require('../../erros/NotEmpty')
const EmptyKeys = require('../../erros/EmptyKeys')

class Ator {
    constructor({
        id,
        nome,
        idade,
        nacionalidade,
        filmes,
        createdAt,
        updatedAt,
    }) {
        this.id = id
        this.nome = nome
        this.idade = idade
        this.nacionalidade = nacionalidade
        this.filmes = filmes
        this.createdAt = createdAt
        this.updatedAt = updatedAt
        console.log(this)
    }
    validateFields() {
        if (typeof this.nacionalidade !== 'string' || this.nacionalidade.length < 3) {
            throw new Error("Valor inválido")
        }
        if (typeof this.nome !== 'string' || this.nome.length < 3) {
            throw new Error("Valor inválido")
        }
        if (this.idade != 'number') {
            throw new Error("Valor inválido")
        }
    }
    async create() {
        this.validateFields()
        const result = await atorSchema.inserir({
            nome: this.nome,
            idade: this.idade,
            nacionalidade: this.nacionalidade,
            filmes: this.filmes
        })
        this.id = result.id
        this.createdAt = result.createdAt
        this.updatedAt = result.updatedAt

    }
    async getByID() {
        const resultId = await atorSchema.getByID(this.id, this.filmes)
        this.nome = resultId.nome
        this.idade = resultId.idade
        this.nacionalidade = resultId.nacionalidade
        this.filmes = resultId.filmes
        this.createdAt = resultId.createdAt
        this.updatedAt = resultId.updatedAt
        if (!resultId) {
            throw new NotFound()
        }
        return resultId
    }

    async put() {
        await none
    }

    async delete() {
        return await atorSchema.deletar(this.id, this.filmes)
    }
}


module.exports = Ator
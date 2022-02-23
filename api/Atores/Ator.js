const atorSchema = require('./tableAtores')
const NotFound = require('../../erros/NotFound')
const NotEmpty = require('../../erros/NotEmpty')
const EmptyKeys = require('../../erros/EmptyKeys')
const tableAtores = require('./tableAtores')

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

    }
    // validateFields() {
    //     if (typeof this.nacionalidade !== 'string' || this.nacionalidade.length < 3) {
    //         throw new Error("Valor inválido")
    //     }
    //     if (typeof this.nome !== 'string' || this.nome.length < 3) {
    //         throw new Error("Valor inválido")
    //     }
    //     if (this.idade != 'number') {
    //         throw new Error("Valor inválido")
    //     }
    // }
    async create() {
        //this.validateFields()
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
            throw new NotFound.NotFound()
        }
        return resultId
    }

    async put() {
        const data = {}
        if (typeof this.nome === 'string' && this.nome.length >= 3) {
            data.nome = this.nome
        }
        if (typeof this.idade === 'string' && this.idade.length <= 3) {
            data.idade = this.idade
        }
        if (typeof this.nacionalidade === 'string' && this.nome.nacionalidade >= 2) {
            data.nacionalidade = this.nacionalidade
        }
        if (Object.keys(data).length === 0) {
            throw new Error("Forneça dados para atualizar")
        }
        return atorSchema.atualizar({
            id: this.id,
            filmes: this.filmes
        }, data)
    }

    async delete() {
        return await atorSchema.deletar(this.filmes, this.id)
    }
}


module.exports = Ator
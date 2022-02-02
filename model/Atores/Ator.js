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
        updatedAt
    }) {
        this.id = id
        this.nome = nome
        this.idade = idade
        this.nacionalidade = nacionalidade
        this.filmes = filmes
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }

    async create() {
        const result = await atorSchema.inserir(
            this.nome,
            this.idade,
            this.nacionalidade,
            this.filmes
        )
    }
    async create() {
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
}


module.exports = Ator
const filmeSchema = require('../controllers/tableFilmes')

class Filme {
    constructor({
        id,
        nome,
        genero,
        diretor,
        createdAt,
        updatedAt
    }) {
        this.id = id
        this.nome = nome
        this.genero = genero
        this.diretor = diretor
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
    async criar() {
        const result = await filmeSchema.inserir({
            nome: this.nome,
            genero: this.genero,
            diretor: this.diretor

        })
        this.id = result.id,
            this.createdAt = result.createdAt,
            this.updatedAt = result.updatedAt
    }

    async atualizar() {
        await filmeSchema.getByID(this.id)
        const fields = [
            'nome',
            "genero",
            "diretor"
        ]
        const validFields = {}

        fields.forEach((field) => {
            const value = this[field]
            if ((typeof value === 'string' && value.length > 0)) {
                validFields[field] = value
            } else {
                throw new Error("Campo não pode ser vazio")
            }

        })
        // retorna lista com o nome das chaves
        if (Object.keys(validFields).length === 0) {
            throw new Error("Não foram fornecidos dados para atualizar")
        }

        await filmeSchema.atualizar(this.id, validFields)
    }

    async deletar() {

        try {
            await filmeSchema.deletar(this.id)
        } catch (error) {
            throw new Error("Registro não existente")

        }

    }

}

module.exports = Filme
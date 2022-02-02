const atorSchema = require('../../model/Atores/AtoresSchema')

module.exports = {
    async listar(idFilme) {
        return await atorSchema.findAll({
            where: {
                filmes: idFilme
            },
            raw: true
        })
    },
    inserir(data) {
        return atorSchema.create(data)
    },
    async getByID(id) {
        const found = await atorSchema.findByPk(id)
        if (!found) {
            throw new NotFound.NotFound()
        }
        return found
    },

    async atualizar(id, validFields) {
        return await atorSchema.update(validFields, {
            where: {
                id: id
            }
        })

    },
    async deletar(id) {
        return await atorSchema.destroy({
            where: {
                id: id
            }
        })



    }
}
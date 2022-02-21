const filmeSchema = require('../model/Filmes/Filmeschema')
const NotFound = require('../erros/NotFound')

// exportar métodos do sequelize
module.exports = {
    async listar() {
        return await filmeSchema.findAll({
            raw: true
        })
    },
    async inserir(filme) {
        return await filmeSchema.create(filme)
    },
    async getByID(id) {
        const found = await filmeSchema.findAll({
            where: {
                id: id
            }
        })
        if (!found) {
            throw new NotFound.NotFound()
        }
        return found
    },

    async atualizar(id, validFields) {
        return await filmeSchema.update(validFields, {
            where: {
                id: id
            }
        })

    },
    async deletar(id) {
        return await filmeSchema.destroy({
            where: {
                id: id
            }
        })



    }
}
const filmeSchema = require('../database/schema')
const errors = require('../erros/NotFound')

// exportar métodos do sequelize
module.exports = {
    async listar() {
        return await filmeSchema.findAll()
    },
    inserir(filme) {
        return filmeSchema.create(filme)
    },
    async getByID(id) {
        const found = await filmeSchema.findByPk(id)
        if (!found) {
            throw new errors.NotFound()
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
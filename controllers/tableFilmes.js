const filmeSchema = require('../database/schema')


// exportar métodos do sequelize
module.exports = {
    async listar () {
        return await filmeSchema.findAll()
    },
    inserir(filme) {
        return filmeSchema.create(filme)
    },
    async getByID (id) {
        return await filmeSchema.findByPk(id)
    },

    async atualizar(id, validFields) {
        return await filmeSchema.update(validFields, {
            where: {id: id}
        })

    },
    async deletar(id){
        return await filmeSchema.destroy({
            where: {id: id}})



        }
}
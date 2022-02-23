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
    async getByID(id, idFilme) {
        const found = await atorSchema.findOne({
            where: {
                id: id,
                filmes: idFilme
            },
            raw: true
        })

        return found
    },

    async atualizar(dataAtor, dataUpdate) {
        return await atorSchema.update(dataUpdate, {
            where: dataAtor
        })

    },
    async deletar(idFilme, id) {
        return await atorSchema.destroy({
            where: {
                filmes: idFilme,
                id: id
            }
        })



    }
}
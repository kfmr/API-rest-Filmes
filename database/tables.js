const schemasModels = [require('../model/Filmes/Filmeschema'),
    require('../model/Atores/AtoresSchema')
]

// sync retorna uma promise
async function createTable() {
    for (item of schemasModels) {
        const models = item
        await models.sync()
    }

}


createTable()
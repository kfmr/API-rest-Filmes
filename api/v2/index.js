const routerV2 = require('express').Router()
const AtoresSchema = require('../Atores/tableAtores')
const Ator = require('../Atores/Ator')

const Serializer = require('../../Serializer').SerializerAtor


routerV2.get('/', async (req, res) => {
    // pegar o id pelo parametro da requisição
    const atores = await AtoresSchema.listar(req.params.idFilme)
    const serializar = new Serializer(res.getHeader('Content-Type'))
    res.status(200).send(serializar.serialize(atores))
})


module.exports = routerV2
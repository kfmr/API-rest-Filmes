const router = require('express').Router()
const Filme = require('../model/FilmesModel')
const schema = require('./tableFilmes')
const errors = require('../erros/NotFound')
const NotEmpty = require('../erros/NotEmpty')
const EmptyKeys = require('../erros/EmptyKeys')
const {
    SerializeResponse
} = require('../Serializer.js');



router.get('/', async (req, res) => {
    const results = await schema.listar()
    const serializeReq = new SerializeResponse(res.getHeader('Content-type'))
    res.status(200).json(serializeReq.serialize(results))
})

router.post('/', async (req, res) => {
    try {
        const data = req.body
        const insertFilme = new Filme(data)
        await insertFilme.criar()
        res.status(201).json(insertFilme)
    } catch (error) {
        if (error instanceof NotEmpty || error instanceof EmptyKeys) {
            res.status(404).send(JSON.stringify({
                "mensagem": error.message,
                "id": error.idError,
                "name": error.name
            }))
        } else {
            res.status(400).send()
        }
    }
})


router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const result = await schema.getByID(id)
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        if (error instanceof errors.NotFound) {
            res.status(404).send(JSON.stringify({
                "mensagem": error.message,
                "id": error.idError,
                "name": error.name
            }))
        } else {
            res.status(400).send()
        }
    }
})

router.put('/:id', async (req, res) => {

    try {
        const id = req.params.id
        const dataRec = req.body
        const data = Object.assign({}, dataRec, {
            id: id
        })
        const filme = new Filme(data)
        await filme.atualizar()
        res.status(204).end()
    } catch (error) {
        if (error instanceof NotEmpty) {
            res.status(404).send(JSON.stringify({
                "mensagem": error.message,
                "id": error.idError,
                "name": error.name
            }))
        } else {
            res.status(500).send()
        }
    }

})


router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const data = new Filme({
            id: id
        })
        await data.deletar(id)
        res.status(204).send()
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = router
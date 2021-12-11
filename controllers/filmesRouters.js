const router = require('express').Router()
const Filme = require('../model/FilmesModel')
const schema = require('./tableFilmes')


router.get('/', async (req, res) => {
    const results = await schema.listar()
    res.status(200).json(results)
})

router.post('/', async (req, res) => {
    const data = req.body
    const insertFilme = new Filme(data)
    await insertFilme.criar()
    res.status(201).json(insertFilme)
})


router.get('/:id', async (req, res) => {
    const id = req.params.id
    const result = await schema.getByID(id)
    if (!result) {
        res.status(400).send()
    } else {
        res.status(200).send(result)
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
        res.status(200).end()
    } catch (error) {
        res.status(404).send(error.message)
    }

})


router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const data = new Filme({
            id: id
        })
        await data.deletar(id)
        res.status(200).send()
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = router
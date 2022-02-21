const router = require('express').Router({
    // juntar os parametros do roteador 
    mergeParams: true
})
const AtoresSchema = require('../Atores/tableAtores')
const Ator = require('../../model/Atores/Ator')

router.get('/', async (req, res) => {
    // pegar o id pelo parametro da requisição
    const atores = await AtoresSchema.listar(req.params.idFilme)
    res.status(200).json(atores)
})

router.get('/:id', async (req, res, next) => {
    try {
        const data = {
            id: req.params.id,
            filmes: req.params.idFilme

        }
        const getAtor = new Ator(data)
        const result = await getAtor.getByID()
        res.status(200).send(result)

    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const idFilme = req.params.idFilme;
        console.log(idFilme)
        const body = {
            nome: req.body.nome,
            idade: req.body.idade,
            nacionalidade: req.body.nacionalidade,
            filmes: req.body.filmes
        }
        const data = Object.assign({}, body, {
            filmes: idFilme
        })
        const ator = new Ator(data)
        await ator.create()
        res.status(201).json(ator).end()
    } catch (error) {
        res.status(400).json(error).end()
    }
})

router.put('/:id', async (req, res) => {
    res.status(200).json("put")

})

router.delete('/:id', async (req, res) => {
    try {
        const data = {
            id: req.params.id,
            filmes: req.params.idFilme
        }
        const ator = new Ator(data)
        await ator.delete()
        res.status(204).end()
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router
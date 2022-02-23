const router = require('express').Router({
    // juntar os parametros do roteador 
    mergeParams: true
})
const AtoresSchema = require('./tableAtores')
const Ator = require('./Ator')

const Serializer = require('../Serializer').SerializerAtor
router.get('/', async (req, res) => {
    // pegar o id pelo parametro da requisição
    const atores = await AtoresSchema.listar(req.params.idFilme)
    const serializar = new Serializer(res.getHeader('Content-Type'))
    res.status(200).send(serializar.serialize(atores))
})

router.get('/:id', async (req, res, next) => {
    try {
        const data = {
            id: req.params.id,
            filmes: req.params.idFilme

        }
        const getAtor = new Ator(data)
        const result = await getAtor.getByID()
        const serializar = new Serializer(res.getHeader('Content-Type'))
        res.status(200).send(serializar.serialize(result))

    } catch (error) {
        res.status(400).send(error)
    }
})

// capturar os cabeçalhos
router.head('/:id', async (req, res) => {
    try {
        const data = {
            id: req.params.id,
            filmes: req.params.idFilme

        }
        const ator = new Ator(data)
        await ator.getByID()
        res.set('Last-modified', (new Date(ator.updatedAt).getTime()))
        res.status(200).end()
    } catch (error) {
        res.status(400).json(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const idFilme = req.params.idFilme;
        const body = {
            nome: req.body.nome,
            idade: req.body.idade,
            nacionalidade: req.body.nacionalidade
        }
        const data = Object.assign({}, body, {
            filmes: idFilme
        })
        const ator = new Ator(data)
        await ator.create()
        const serializar = new Serializer(res.getHeader('Content-Type'))
        res.status(201).send(serializar.serialize(ator)).end()
    } catch (error) {
        res.status(400).json(error).end()
    }
})

router.put('/:id', async (req, res) => {
    try {
        const data = Object.assign({},
            req.body, {
                id: req.params.id,
                filmes: req.params.idFilme
            }

        )
        const ator = new Ator(data)
        await ator.put()
        const timestamp = (new Date(ator.updatedAt)).getTime()
        res.set('Last-modified', timestamp)
        res.status(200).json(ator).end()
    } catch (error) {
        res.status(400).send(error)
    }


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
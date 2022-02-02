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


router.post('/', async (req, res) => {
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
        console.log(ator)
        await ator.create()
        res.status(201).json(ator).end()
    } catch (error) {
        res.status(400).json(error).end()
    }
})

router.put('/:id', async (req, res) => {
    res.status(200).json("put")

})

module.exports = router
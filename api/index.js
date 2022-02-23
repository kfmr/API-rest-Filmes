const express = require('express')
const config = require('config')
const app = express()
const router = require('./Filmes/filmesRouters');
const NotSupported = require('../erros/NotSupported');
const {
    acceptedFormat
} = require('./Serializer.js');
const {
    validFormat
} = require('./Serializer.js');
const routerAtores = require('./Atores/index');
const {
    NotFound
} = require('../erros/NotFound');
const Filme = require('./Filmes/FilmesModel');

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use((req, res, next) => {
    let requestFormat = req.header('Accept')
    // captura o valor do header e verifica se o index do valor existe na lista
    if (requestFormat === '*/*') {
        requestFormat = 'application/json'
    } else if (requestFormat.includes(validFormat) === -1) {
        res.status(406).end()
        return

    }
    // define o cabeçalho - tipo de formato da resposta
    res.setHeader('Content-Type', requestFormat)
    next()

})

app.use('/api/filmes', router)
router.use('/:idFilme/atores', routerAtores)
// middleware que recebe o erro da requisição e trata o erro
/* app.use((error, req, res, next) => {
    if (error instanceof errors.NotFound) {
        res.status(404).send(JSON.stringify({
            "mensagem": error.message,
            "id": error.idError,
            "name": error.name
        }))
    } else {

        res.status(400).send()
    }

}) */


// middleware que recebe a requisição e valida o formato. 
app.use((error, req, res, next) => {
    if (error instanceof NotSupported) {
        res.status(406).send(JSON.stringify({
            "mensagem": error.message,
            "id": error.idError,
            "name": error.name
        }))
    } else {

        res.status(400).send()
    }
    next()
})


// const checkMovie = async (req, res, next) => {
//     try {
//         const id = req.params.idFilme
//         const movie = new Filme({
//             id: id
//         })
//         await movie.getByID()
//         req.movie = movie
//         next()
//     } catch (error) {
//         next(error)
//     }
// }



app.listen(8080, () => console.log("executando"))
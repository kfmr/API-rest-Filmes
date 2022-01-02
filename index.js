const express = require('express')
const config = require('config')
const app = express()
const {
    errors
} = require('./erros/NotFound')

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
const router = require('./controllers/filmesRouters.js')
app.use('/api/filmes', router)

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

app.listen(8080, () => console.log("executando"))
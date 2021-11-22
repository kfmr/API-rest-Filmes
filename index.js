const express = require('express')
const config = require('config')
const app = express()


app.use(express.urlencoded({extended: true}));
app.use(express.json());
const router = require('./controllers/filmesRouters.js')
app.use('/api/filmes', router)

app.listen(8080, () => console.log("executando"))

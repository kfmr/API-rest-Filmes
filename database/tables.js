const schema = require('../controllers/tableFilmes')

// sync retorna uma promise
filmeSchema.sync()
.then(() =>  console.log("tabela criada"))
.catch((error) => console.log(error))
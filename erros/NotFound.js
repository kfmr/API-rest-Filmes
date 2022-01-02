class NotFound extends Error {
    constructor() {
        // invoca o construtor da classe erro - Herança
        const message = "Registro não existente"
        super(message)
        this.name = 'NotFound'
        this.idError = 0
    }
}


module.exports = {
    NotFound
}
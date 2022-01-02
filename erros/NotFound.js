class NotFound extends Error {
    constructor() {
        // invoca o construtor da classe erro - Herança
        super("Registro não existente")
        this.name = 'NotFound'
        this.idError = 0
    }
}


module.exports = NotFound
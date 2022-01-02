class NotFound extends Error {
    constructor() {
        // invoca o construtor da classe erro - Herança
        super("Registro não existente")
        this.name = 'NotFound'
        this.idError = 0
    }
}

class NotEmpty extends Error {
    constructor(campo) {
        super(`O ${campo} não pode ser vazio`)
    }
}

module.exports = {
    NotFound,
    NotEmpty
}
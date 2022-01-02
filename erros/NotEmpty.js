class NotEmpty extends Error {
    constructor(campo) {
        const message = `O ${campo} não pode ser vazio`
        super(message)
        this.name = "Empty Field"
        this.idError = 1
    }
}

module.exports = NotEmpty
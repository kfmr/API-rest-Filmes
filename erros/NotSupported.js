class NotSupported extends Error {
    constructor(contentType) {
        const message = `O tipo ${contentType} não é suportado`
        super(message)
        this.name = "Not Supported"
        this.idError = 3
    }
}

module.exports = NotSupported
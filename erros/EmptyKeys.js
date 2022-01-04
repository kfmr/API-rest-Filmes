class EmptyKeys extends Error {
    constructor() {
        const message = "Os campos não podem ser vazios"
        super(message)
        this.name = "Empty Fields",
            idError = 1
    }
}

module.exports = EmptyKeys
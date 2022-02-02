const Sequelize = require('sequelize')
const instance = require('../../database/connection')

const columns = {
    // chave das colunas
    "nome": {
        type: Sequelize.STRING,
        allowNull: false

    },
    "genero": {
        type: Sequelize.STRING,
        allowNull: false
    },
    "diretor": {
        type: Sequelize.STRING,
        allowNull: false
    }
}
// nao modificar os nomes dos campos
const options = {
    freezeTableName: true,
    tableName: 'filmes',
    timestamps: true
}

module.exports = instance.define(
    'filmes',
    columns,
    options
);
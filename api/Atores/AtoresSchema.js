const Sequelize = require('sequelize')
const instance = require('../../database/connection')

const columns = {
    // chave das colunas
    "nome": {
        type: Sequelize.STRING,
        allowNull: false

    },
    "idade": {
        type: Sequelize.STRING,
        allowNull: false
    },
    "nacionalidade": {
        type: Sequelize.STRING,
        allowNull: false
    },
    "filmes": {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: require('../Filmes/Filmeschema'),
            key: 'id'
        }
    }
}
// nao modificar os nomes dos campos
const options = {
    freezeTableName: true,
    tableName: 'atores',
    timestamps: true
}

module.exports = instance.define(
    'atores',
    columns,
    options
);
const Sequelize = require('sequelize')
const config = require('config')
const instance = new Sequelize(
    // configurações da conexação do bd
    config.get('Mysql.banco'),
    config.get("Mysql.user"),
    config.get("Mysql.pwd"),
    {
        host: config.get("Mysql.host"),
        dialect: 'mysql'
    }
    )

module.exports = instance
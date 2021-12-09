const Sequelize = require('sequelize')
const config = require('../config');

const db = {}
const sequelize = new Sequelize(config.DB_DATABASE, config.DB_USER, config.DB_PASSWORD, {
    host: config.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
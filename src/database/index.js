const Sequelize = require('sequelize')
const configDB = require('../config/database')

const connection = new Sequelize(configDB)

connection.authenticate().then(()=>{
    console.log("conectado com o banco de dados!")
})

module.exports = connection
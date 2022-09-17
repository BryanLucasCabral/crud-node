const Sequelize = require('sequelize')
const configDB = require('../config/database')
const user = require('../models/user')
const connection = new Sequelize(configDB)

connection.authenticate().then(()=>{
    console.log("conectado com o banco de dados!")
})

user.init(connection)
module.exports = connection
const fs = require('fs') // dealing with file system
const path = require('path') // dealing with absolute path, relative path, etc
const Sequelize = require('sequelize')
const config = require('../config/config')

const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

fs.readdirSync(__dirname)
    .filter((file) => file != 'index.js') // get all files in current directory, except for index.js
    .forEach((file) => { // for each file found, import models
        const model = sequelize.import(path.join(__dirname, file))
        db[model.name] = model // e.g. db.User = model
    })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
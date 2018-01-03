console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined')) // use log generator called 'morgan'. 'Combined' makes log print in a certain way. (e.g. shows, what device hit our endpoint)
app.use(bodyParser.json()) // allow our express app to easily parse any JSON request, that comes in
app.use(cors()) // allow any host or client to access this (? learn more ?)

require('./routes')(app)

sequelize.sync() // connect sequelize to the whatever database we have it configured for and configure everything
    .then(()=> { // once we're done, start server
        app.listen(config.port)
        console.log(`Server listens to port ${config.port}`)
    })


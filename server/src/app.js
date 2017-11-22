console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined')) // use log generator called 'morgan'. 'Combined' makes log print in a certain way. (e.g. shows, what device hit our endpoint)
app.use(bodyParser.json()) // allow our express app to easily parse any JSON request, that comes in
app.use(cors()) // allow any host or client to access this (? learn more ?)

app.post('/register', (req, res) => {
    res.send({
        message: `Hello, ${req.body.email}! Your user was registered!`
    })
})

app.listen(process.env.PORT || 8081)


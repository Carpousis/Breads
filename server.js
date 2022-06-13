//DEPENDENCIES
const express = require('express')
//CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
console.log(PORT)
//ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to and Awsome App about Breads!')
})
//LISTEN
app.listen(PORT, () => {
    console.log('nomming at port', PORT);
})
//BREADS
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)
const express = require('express')
const bread = require('../models/breads.js')

const breads = express.Router()

//INDEX
breads.get('/', (_req, res) => {
    res.render('index',
        {
        breads: bread,
        title: 'Index Page'

    })
    //res.send(bread)
    }
)


//SHOW 
breads.get('/:arrayIndex', (req, res) => {
    if (bread[req.params.arrayIndex]) {
    res.render('Show', {
        bread: bread[req.params.arrayIndex]
        })
    } else {
        res.send('404')
    }
})

module.exports = breads
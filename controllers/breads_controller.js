const express = require('express')
const breads = require('../models/breads.js')

const router = express.Router()

//INDEX
router.get('/', (_req, res) => {
    res.send('This is the index at /breads')
})

//SHOW 
router.get('/:arrayIndex', (req, res) => {
    res.send(breads[req.params.arrayIndex])
})

module.exports = router
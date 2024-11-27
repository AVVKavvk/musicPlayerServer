const {createSong} = require('../controllers')

const route = require("express").Router()

route.post('/',createSong)

module.exports = route
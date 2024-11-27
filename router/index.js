const {createSong,deleteSong, filterSongs, allSongs} = require('../controllers')

const route = require("express").Router()

route.post('/',createSong)
route.delete('/',deleteSong)
route.get('/filter',filterSongs)
route.get('/all',allSongs)

module.exports = route
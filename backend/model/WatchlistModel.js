const mongoose = require('mongoose')
const WatchlistSchema = require('../schemas/WatchlistSchema.js')

const WatchlistModel = new mongoose.model('watchlist',WatchlistSchema)

module.exports= {WatchlistModel}
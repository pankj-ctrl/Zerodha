const mongoose = require('mongoose')

const WatchlistSchema = mongoose.Schema({
    name: String,
    price: Number,
    percent: String,
    isDown: Boolean,
})

module.exports = {WatchlistSchema}
const mongoose = require('mongoose')

const HodlingSchema =mongoose.Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
})

module.exports= {HodlingSchema};
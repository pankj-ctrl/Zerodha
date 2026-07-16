const {model} = require('mongoose')

const {HodlingSchema} = require('../schemas/HoldingSchema.js')

const HoldingModel = new model("holding",HodlingSchema)

module.exports = {HoldingModel}
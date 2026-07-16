const mongoose = require('mongoose')
const PostionsSchema = require('../schemas/PositionsSchema.js')

const PositionsModel = new mongoose.model('position',PostionsSchema.PositionsSchema)

module.exports = {PositionsModel}
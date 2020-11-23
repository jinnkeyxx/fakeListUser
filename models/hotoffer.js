const mongoose = require('mongoose')

const hotOfferSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    title : String,
    image : String,
    newPrice : Number,
    oldPrice : Number,
    discount : Number,
})
module.exports = mongoose.model('hotoffer' , hotOfferSchema )
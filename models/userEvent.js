const mongoose = require('mongoose')
const { Schema } = mongoose

const userEventSchema = new Schema({
    title: String,
    user: mongoose.ObjectId,
    people: [mongoose.ObjectId],
    rating: Number,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
})

const UserEvent = mongoose.model('UserEvent', userEventSchema)

module.exports = UserEvent

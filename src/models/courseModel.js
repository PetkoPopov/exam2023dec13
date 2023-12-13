const mongoose = require('mongoose')
const courseSchema = mongoose.Schema({
    title: String,
    type: String,
    image: String,
    description: String,
    certificate: String,
    price: Number,
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
})

const Course = mongoose.model('courses', courseSchema)

//validation in controller

module.exports = Course
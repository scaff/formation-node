const { mongoose } = require('../config/database')

const contactSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    age: Number
})

const contactModel = new mongoose.model('contact', contactSchema)

module.exports = contactModel
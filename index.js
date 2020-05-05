const express = require('express')
const mongoose = require('mongoose')

const app = express()


const contactSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    age: Number
})

const contactModel = new mongoose.model('contact', contactSchema)

app.use(express.json())

function checkIdExistence (req, res, next) {
    // const index = parseInt(req.params.id)
    // if (index > contactList.length - 1 || index < 0) {
    //     return res.status(404).json({
    //         status: 404
    //     })
    // }
    next()
}

app.get('/adults', function (req, res) {
    contactModel.find({ age: { $gte: 18 } }, function (err, adultList) {
        if (err) return console.log(err)
        return res.json(adultList)
    })
})

app.get('/contacts', function (req, res) {
    contactModel.find(function(err, contactList) {
        if (err) return console.log(err)
        console.log('tout va bien')
        return res.json(contactList)
    })
})

app.get('/contacts/average_age', function (req, res) {
    contactModel.aggregate([
        {
            $group: {
                _id: null,
                averageAge: { $avg: '$age' }
            }
        }
    ], function (err, monResultat) {
        if (err) return console.log(err)
        const { averageAge } = monResultat[0]
        // équivaut à
        // const averageAge = monResultat.averageAge

        return res.json({ averageAge })
        // équivaut à        nom de clé: valeur
        // return res.json({ averageAge: averageAge })
        // utilisable uniquement quand le nom de clé et le nom de
        // variable qui contient la valeur sont identiques
    })

})

app.get('/contacts/:id', checkIdExistence, function (req, res) {
    contactModel.findOne({ _id: req.params.id}, function (err, contactFound) {
        return res.json(contactFound)
    })
})

app.delete('/contacts/:id', checkIdExistence, function (req, res) {
    contactList = contactList.splice(index - 1, 1)
    return res.json(contactList)
})

app.post('/contacts', function (req, res) {
    const newContact = req.body
    const contactDb = new contactModel(req.body)
    contactDb.save(function (err, contactAdded){
        if (err) return console.log(err)
        console.log('mon contact a été ajouté')
        return res.json(contactAdded)
    })
})

app.patch('/contacts/:id', checkIdExistence, function (req, res) {
    const newContact = req.body
    
    const index = req.params.id
    contactModel.updateOne({ _id: index }, newContact, function(err, editedContact) {
        if (err) return console.log(err)
        return res.json(editedContact)
    })
})

app.listen(3000, function (){
    console.log('Ecoute sur le port 3000')
})

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('on est enfin connecté.')
})
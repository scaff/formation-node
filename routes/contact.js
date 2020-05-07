const express = require('express')
const contact = express.Router()

const contactModel = require('../models/contact')


function checkIdExistence (req, res, next) {
    // const index = parseInt(req.params.id)
    // if (index > contactList.length - 1 || index < 0) {
    //     return res.status(404).json({
    //         status: 404
    //     })
    // }
    next()
}

contact.get('/', function (req, res) {
    contactModel.find(function(err, contactList) {
        if (err) return console.log(err)
        console.log('tout va bien', contactList)
        return res.json(contactList)
    })
})

contact.delete('/', function (req, res) {
    const ids = Object.values(JSON.parse(req.query.id))
    delete ids[ids.length - 1]
    delete ids[ids.length - 2]
    contactModel.deleteMany({
        _id: {
            $in: ids
        }
    }, function (err, result) {
        if (err) return console.log(err)
        return res.json(result)
    })
})

contact.get('/adults', function (req, res) {
    contactModel.find({ age: { $gte: 18 } }, function (err, adultList) {
        if (err) return console.log(err)
        return res.json(adultList)
    })
})

contact.get('/average_age', function (req, res) {
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

contact.get('/:id', checkIdExistence, function (req, res) {
    contactModel.findOne({ _id: req.params.id}, function (err, contactFound) {
        return res.json(contactFound)
    })
})

contact.delete('/:id', checkIdExistence, function (req, res) {
    contactModel.deleteOne({ _id: req.params.id }, function (err, contactList) {
        return res.json(contactList)
    })
})

contact.post('/', function (req, res) {
    const newContact = req.body
    const contactDb = new contactModel(req.body)
    contactDb.save(function (err, contactAdded){
        if (err) return console.log(err)
        console.log('mon contact a été ajouté')
        return res.json(contactAdded)
    })
})

contact.patch('/:id', checkIdExistence, function (req, res) {
    const newContact = req.body
    
    const index = req.params.id
    contactModel.updateOne({ _id: index }, newContact, function(err, editedContact) {
        if (err) return console.log(err)
        return res.json(editedContact)
    })
})

module.exports = contact
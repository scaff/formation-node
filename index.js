const express = require('express')
const app = express()

let contactList = [
    {
        firstname: 'Loïc',
        lastname: 'Dupont',
        age: 23
    },
    {
        firstname: 'Matthieu',
        lastname: 'Durand',
        age: 23
    }
]

app.use(express.json())

function checkIdExistence (req, res, next) {
    const index = parseInt(req.params.id)
    if (index > contactList.length - 1 || index < 0) {
        return res.status(404).json({
            status: 404
        })
    }
    next()
}

app.get('/contacts', function (req, res) {
    return res.json(contactList)
})

app.get('/contacts/:id', checkIdExistence, function (req, res) {
    return res.json(contactList[index])
})

app.delete('/contacts/:id', checkIdExistence, function (req, res) {
    contactList = contactList.splice(index - 1, 1)
    return res.json(contactList)
})

app.post('/contacts', function (req, res) {
    const newContact = req.body
    contactList.push(newContact)

    return res.json(contactList)
})

app.patch('/contacts/:id', checkIdExistence, function (req, res) {
    const newContact = req.body
    
    contactList[index] = Object.assign(contactList[index], newContact)

    return res.json(contactList[index])
})

app.listen(3000, function (){
    console.log('Ecoute sur le port 3000')
})
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

app.get('/contacts', function (req, res) {
    return res.json(contactList)
})

app.get('/contacts/:id', function (req, res) {
    const index = parseInt(req.params.id)
    if (index > contactList.length - 1 || index < 0) {
        return res.status(404).json({
            status: 404
        })
    }
    return res.json(contactList[index])
})

app.delete('/contacts/:id', function (req, res) {
    const index = parseInt(req.params.id)
    if (index > contactList.length - 1 || index < 0) {
        return res.status(404).json({
            status: 404
        })
    }

    contactList = contactList.splice(index - 1, 1)
    return res.json(contactList)
})

app.listen(3000, function (){
    console.log('Ecoute sur le port 3000')
})
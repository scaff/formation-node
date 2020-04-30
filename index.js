const express = require('express')
const app = express()

const contactList = [
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

app.listen(3000, function (){
    console.log('Ecoute sur le port 3000')
})
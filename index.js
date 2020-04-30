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

app.get('/toto', function (req, res) {
    res.send('Hello world avec /toto !')
})

app.post('/toto', function (req, res) {
    res.send('POST /toto')
})

app.listen(3000, function (){
    console.log('Ecoute sur le port 3000')
})
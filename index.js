const express = require('express')
const cors = require('cors')
const app = express()

// IMPORT DES ROUTEUR
const contactRouter = require('./routes/contact')

// IMPORT DES CONFIG
const { db } = require('./config/database')

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('on est enfin connecté.')
})

app.use(cors())
app.use(express.json())

app.use('/contacts', contactRouter)

app.listen(3000, function (){
    console.log('Ecoute sur le port 3000')
})

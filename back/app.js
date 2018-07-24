const express = require('express')
const bodyParser = require('body-parser')
const itemsRouter = require('./routes/items')
const app = express()
app.use(bodyParser.json())

// Lier itemsRouter aux URL commençant par /api/items
app.use('/api/items', itemsRouter)

console.log('Listening on port 6000')
app.listen(6000)
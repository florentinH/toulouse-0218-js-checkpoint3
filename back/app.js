const express = require('express')
const bodyParser = require('body-parser')
const itemsRouter = require('./routes/items')
const app = express()
app.use(bodyParser.json())

app.get('/',(req, res) => {
    res.send("Test back-end")
  })



// Lier itemsRouter aux URL commençant par /api/items
app.use('/api/items', itemsRouter)

console.log('Listening on port 4000')
app.listen(4000)
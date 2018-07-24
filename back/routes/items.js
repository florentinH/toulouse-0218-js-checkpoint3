const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/', (req, res) => {
  db.query('SELECT * FROM items', (req, res) => {
    if (err) {
      console.log(err)
      return res.status(500).json({error: error.message })
    }
    res.json(items)
  })
})

module.exports = router

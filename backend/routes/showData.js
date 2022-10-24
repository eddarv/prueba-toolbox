const express = require('express')
const router = express.Router()
const { showData, showList } = require('../controllers/showData')

// Rutas de la REST API. Cada una ejecuta su respectivo controlador
router
  .get('/files/data', showData)
  .get('/files/list', showList)

module.exports = router

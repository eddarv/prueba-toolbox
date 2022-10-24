'use strict'
const express = require('express')
const port = 5000
const cors = require('cors')
const app = express()
const showData = require('./routes/showData')

app
  .set('port', port)
  .use(cors({
    credentials: true,
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
  }))
  .use(express.json())
  .use('/', showData)

module.exports = app

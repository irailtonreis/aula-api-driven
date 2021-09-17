const express = require('express')
const ClienteController = require('./Controllers/ClienteController')
const route = express.Router();

route.get('/clientes', ClienteController.index)
route.post('/clientes', ClienteController.store)
route.get('/clientes/:id', ClienteController.show)

module.exports = route;
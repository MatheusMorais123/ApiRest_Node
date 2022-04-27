const express = require('express');
const ClientController = require('./controllers/ClientController');
const SearchController = require('./controllers/SearchController');

const routes = express.Router();


routes.get('/clients',ClientController.index);
routes.post('/clients',ClientController.store);
routes.delete('/clients/:id',ClientController.delete);
routes.get('/search', SearchController.index);

module.exports = routes;
const express = require("express");
const routes  = express.Router();


const SearchController = require('./controllers/SearchController');

// Inciando a Rota
//routes.get("/search", SearchController.index);
routes.post(SearchController.search);

module.exports = routes;

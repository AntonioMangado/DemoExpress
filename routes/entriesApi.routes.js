const express = require('express');
// Rutas de productos
const entriesApiController = require("../controllers/entriesApi.controllers");
const entriesApiRouter = express.Router();

entriesApiRouter.get('https://demoexpress-htoz.onrender.com/', entriesApiController.getEntries);
entriesApiRouter.post('https://demoexpress-htoz.onrender.com/', entriesApiController.createEntry);
entriesApiRouter.put("https://demoexpress-htoz.onrender.com/", entriesApiController.updateEntry);
entriesApiRouter.delete("https://demoexpress-htoz.onrender.com/", entriesApiController.deleteEntry);

module.exports = entriesApiRouter;

// GET http://localhost:3000/api/entries --> ALL
// GET http://localhost:3000/api/entries?email=hola@gmail.com --> por email
// POST http://localhost:3000/api/entries
/*
{
    "title":"noticia desde Node",
    "content":"va a triunfar esto2",
    "email":"alejandru@thebridgeschool.es",
    "category":"sucesos"
}
    */
const express = require('express')
const bookController = require("../controllers/books.controllers")
const app = express()
/**
 * Requerimos express e, inmediatamente después, ejecutamos Router.
 * Este crea una "miniapp". Las funcionalidades son las mismas que el "app" del index, pero
 * lo usamos para crear enrutadores que concentrarán todas las rutas de un mismo tipo
 * y tener todo mejor organizado
 */
const router = require('express').Router();
const checkApiKey = require("../middleware/auth_api_key");

app.use(express.json()) // Habilito recepción de JSON en servidor.

router.get("/:title?", (bookController.getBook));

// POST http://localhost:3000/api/books?API_KEY=123abc
router.post("/", (checkApiKey, bookController.createBook));

// PUT http://localhost:3000/api/books?API_KEY=123abc
router.put("/", (checkApiKey, bookController.editBook));

// DELETE http://localhost:3000/api/books?API_KEY=123abc
router.delete("/:title?", (checkApiKey, bookController.deleteBook));

module.exports = router
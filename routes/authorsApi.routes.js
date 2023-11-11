const express = require('express');
// Rutas de productos
const authorsApiController = require("../controllers/authorsApi.controllers");
const authorsApiRouter = express.Router();

authorsApiRouter.get('https://demoexpress-htoz.onrender.com/', authorsApiController.getAuthors);
authorsApiRouter.post("https://demoexpress-htoz.onrender.com/", authorsApiController.createAuthors);
authorsApiRouter.put("https://demoexpress-htoz.onrender.com/", authorsApiController.updateAuthor);
authorsApiRouter.delete("https://demoexpress-htoz.onrender.com/", authorsApiController.deleteAuthor);

// authorsApiRouter.post('/', authorsApiController.createEntry);
// authorsApiRouter.put("/", authorsApiController.updateEntry);
// authorsApiRouter.delete("/", authorsApiController.deleteEntry);

module.exports = authorsApiRouter;
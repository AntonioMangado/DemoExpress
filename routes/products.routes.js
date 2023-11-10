const productControllers = require("../controllers/products.controllers")
/**
 * Requerimos express e, inmediatamente después, ejecutamos Router.
 * Este crea una "miniapp". Las funcionalidades son las mismas que el "app" del index, pero
 * lo usamos para crear enrutadores que concentrarán todas las rutas de un mismo tipo
 * y tener todo mejor organizado
 */
const router = require('express').Router()

router.get('/:id?', (productControllers.getProduct));

module.exports = router;
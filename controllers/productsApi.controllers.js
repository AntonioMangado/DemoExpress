const fetchProduct = require("../utils/fetchProducts")

    // Read
    // 
    const getProduct = async (req, res) => {
    try {
        const id = req.params.id || "";
        let products = await fetchProduct.getProduct(id); //{}
        res.status(200).json(products); // Respuesta de la API para 1 producto
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
    }

    // Update
    const updateProduct = (req, res) => {
        res.status(200).send("Producto editado!");
    }

    // Delete
    const deleteProduct = (req, res) => {
        res.status(200).send("Producto borrado!");
    }

    module.exports = {
        getProduct,
        updateProduct,
        deleteProduct
    };
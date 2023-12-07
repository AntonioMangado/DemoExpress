const {validationResult} = require("express-validator");
    
    // Create
    const createBook = (req, res) => {

        // Manejo de errores en el body
        const result = validationResult(req);
            if (!result.isEmpty()) {
                return res.send({ errors: result.array() });
            }
        
        // Flujo normal de la app
        console.log(req.body);
        res.status(201).json({
            success:true,
            title:req.body.title,
            id: Math.floor(Math.random() * (10000 - 1) + 1),
            data:req.body
        });
    }

    // Read
    const getBook = (req, res) => {

        console.log(req.params.title);

        if(req.params.title){
            res.status(200).json({
                message:"Has solicitado:"+req.params.title,
                title:req.params.title,
                success:true,
                data:{
                    "title": "Hamlet",
                    "author":"Shakespeare",
                    "pages": 2000,
                    "year":1550,
                    "description": "en un lugar de la mancha..."
                }
            });
        }else{
            res.status(200).json({
                message:"Aquí van tus libros!",
                success:true,
                data:[{
                    "title": "Don Quijote de la Mancha",
                    "author":"Miguel de Cervantes",
                    "pages": 2000,
                    "year":1550,
                    "description": "en un lugar de la mancha..."
                },
                {
                    "title": "Hamlet",
                    "author":"Miguel de Cervantes",
                    "pages": 2000,
                    "year":1550,
                    "description": "en un lugar de la mancha..."
                },
                {
                    "title": "Lazarillo de Tormes",
                    "author":"Miguel de Cervantes",
                    "pages": 2000,
                    "year":1550,
                    "description": "en un lugar de la mancha..."
                }]
            }
                );
        }
    }

    // Update
    const editBook = (req, res) => {
        res.status(200).send("Libro editado!");
    }

    // Delete
    const deleteBook = (req, res) => {

        // Manejo de errores en el body
        const result = validationResult(req);
            if (!result.isEmpty()) {
                return res.send({ errors: result.array() });
            }
        
        // Flujo normal de la app
        res.status(200).send("Libro borrado!");
    }

    // Exporto los modulos
    module.exports = {
        createBook,
        getBook,
        editBook,
        deleteBook
    }
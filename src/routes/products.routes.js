const express = require('express');
const router = express.Router();

const Product = require('../models/Product');

// Listamos los productos, si viene un ID por parámetro entonces solo buscaremos dicho producto.
router.get('/:id?', async (req, res) => {
    var result = {};
    if(!req.params.id){
        result = await Product.find();
    } else {
        result = await Product.findOne({"_id": req.params.id})
            .catch(err => console.log(err))
    }
    res.json(result);
});

// Agregamos un nuevo producto a la base de datos.
router.post('/', async (req, res) => {

    // Validamos vengan datos en el cuerpo de la petición.
    if( Object.keys(req.body).length === 0){
        res.status(500).json({
            error: "Petición vacía.",
            message: "No se encontraron datos en la petición."
        });

    } else {
        // Creamos el schema del producto nuevo.
        const { code, name, price, discount } = req.body;
        const product = new Product({code, name, price, discount});

        // Guardamos el producto en la base de datos.
        await product.save()
            .then( () => res.status(201).json({message: 'Producto guardado correctamente.'}))
            .catch(err => res.status(500).json({
                error: err.message,
                message: 'Ha ocurrido un problema al guardar el producto.'
            }));
    }
});

// Actualizamos un producto según el ID que nos envíen por parámetro en la URL.
router.put('/:id?', async (req, res) => {

    // Validamos que el ID venga en los parámetros.
    if(!req.params.id){
        res.status(404).json({
            error: "ID no especificado.",
            message: "Debe indicar el ID del producto a actualizar."
        });
    } else {

        // Actualizamos el producto en la base de datos.
        await Product.findOneAndUpdate(req.params.id, req.body)
        .then(() => res.status(200).json({message: 'Producto actualizado correctamente.'}))
        .catch(err => res.status(500).json({
            error: err.message,
            message: 'Ha ocurrido un problema al actualizar el producto.'
        }));
    }
});

// Eliminamos un producto de la base de datos según el ID que nos envíen por parámetro en la URL.
router.delete('/:id?', async (req, res) => {

    // Validamos que el ID venga en los parámetros.
    if(!req.params.id){
        res.status(404).json({
            error: "ID no especificado.",
            message: "Debe indicar el ID del producto a eliminar."
        });

    } else {
        // Borramos el producto de la base de datos.
        await Product.deleteOne({_id: req.params.id})
            .then(() => res.status(200).json({message: 'Producto eliminado correctamente.'}))
            .catch(err => res.status(500).json({
                error: err.message,
                message: 'Ha ocurrido un problema al eliminar el registro.'
            }));
    }
});

module.exports = router;
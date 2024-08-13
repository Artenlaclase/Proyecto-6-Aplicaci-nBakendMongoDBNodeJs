const Product = require('../models/productModel');


exports.createProduct = async (req, res) => {
    const { nombre, precio, descripcion } = req.body
    try {
        const newProduct = await Product.create({ nombre, precio, descripcion });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error creando el producto",
            error: error.message
        });
    }
};


exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json({ products });
    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error al intentar obtener los productos",
            error: error.message
        });

    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                error: 'Producto no encontrado'
            });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error al intentar obtener el producto",
            error: error.message
        });

    }
};

exports.updateProductById = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({
                error: 'Producto no se encuentra',
                error: error.message
            });
        }
    } catch (error) {
        res.status(500).json({
            error: 'Error al actualizar el producto',
            error: error.message
        });
    }
};

exports.deleteProductById = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (product) {
            res.status(200).json({
                message: 'Producto Borrado'
            });
        } else {
            res.status(404).json({
                error: 'Producto no encontrado'
            });
        }
    } catch (error) {
        res.status(500).json({
            error: 'Error al borrar el producto'
        });
    }
};



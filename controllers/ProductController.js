const Product = require('../models/productModel');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json({ products });
    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error al intentar obtener los productos",
            error
        });

    }
};

exports.createProduct = async (req, res) => {
    const { nombre, precio } = req.body
    try {
        const newProduct = await Product.create({ nombre, precio });
        res.json(newProduct);
    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error creando la guitarra",
            error: error.message
        });
    }
};

const express = require('express');
const { getAllProducts, createProduct, getProductById, updateProductById, deleteProductById } = require('../controllers/productController');

const productRouter = express.Router();

//productRouter.get('/readall', getAllProducts);

productRouter.post('/create', createProduct);

productRouter.get('/readone/:id', getProductById);

productRouter.put('/update/:id', updateProductById);

productRouter.delete('/delete/:id', deleteProductById)


module.exports = productRouter;
const express = require('express');
const { getAllProducts, createProduct } = require('../controllers/productController');
 
const productRouter = express.Router();

productRouter.get('/readall', getAllProducts);
productRouter.post('/create', createProduct);



module.exports = productRouter;
const express = require('express');
const { getAllProducts } = require('../controllers/productController');
 
const productRouter = express.Router();

productRouter.get('/readall', getAllProducts);

module.exports = productRouter;
const express=require('express')
const { getProduct, getSpeificProduct, createProduct, updateProduct, deletProduct } = require('../controller/product.controller');
const { Product } = require('../models/product.model');
const productRouter=express.Router();



productRouter.get('/',getProduct)

productRouter.get('/:id',getSpeificProduct)
productRouter.post('/',createProduct)

// update a product
productRouter.put('/:id',updateProduct)


// delete a product

productRouter.delete('/:id',deletProduct);


exports.productRouter=productRouter
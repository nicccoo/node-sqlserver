import { Router } from "express";

import { createNewProduct, deleteProduct, getProductById, getProducts, getTotalProducts, updateProductsById } from '../controllers/products.controller';

const router = Router()

router.get('/products', getProducts);

router.post('/products', createNewProduct);

router.get('/products/count', getTotalProducts);

router.get('/products/:id', getProductById);

router.delete('/products/:id', deleteProduct);

router.put('/products/:id', updateProductsById);


export default router;
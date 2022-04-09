import express from 'express';
const productControllers = require('../controllers/Product-Controllers');

const router = express.Router()

router.post('/', productControllers.createProduct);

router.get('/', productControllers.getProducts);

router.get('/:id', productControllers.getProductById);

router.delete('/:id', productControllers.deleteProduct);

router.put('/:id', productControllers.updateProduct);

module.exports = router
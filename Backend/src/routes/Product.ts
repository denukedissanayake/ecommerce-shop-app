import express from 'express';
const productControllers = require('../controllers/Product-Controller');
const { VerifyToken , VerifyAdmin } = require('../utils/auth-middlewares');

const router = express.Router()

router.post('/', VerifyToken, VerifyAdmin, productControllers.createProduct);

router.get('/', productControllers.getProducts);

router.get('/:id', productControllers.getProductById);

router.delete('/:id', VerifyToken, VerifyAdmin, productControllers.deleteProduct);

router.put('/:id', VerifyToken, VerifyAdmin, productControllers.updateProduct);

module.exports = router
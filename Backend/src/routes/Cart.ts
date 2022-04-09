import express from 'express';
const cartControllers = require('../controllers/Cart-controller');

const router = express.Router()

router.post('/', cartControllers.createCart);

router.get('/', cartControllers.getCarts);

router.get('/:id', cartControllers.getCartById);

router.put('/:id', cartControllers.updateCart);

router.delete('/:id', cartControllers.deleteCart);

module.exports = router
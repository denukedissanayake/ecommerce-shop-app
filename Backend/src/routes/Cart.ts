import express from 'express';
const cartControllers = require('../controllers/Cart-Controller');

const router = express.Router()

router.post('/', cartControllers.createCart);

router.get('/', cartControllers.getCarts);

router.get('/:id', cartControllers.getCartByUserId);

router.put('/:id', cartControllers.updateCart);

router.delete('/:id', cartControllers.deleteCart);

module.exports = router
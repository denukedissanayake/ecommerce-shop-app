import express from 'express';
const cartControllers = require('../controllers/Cart-Controller');
const { VerifyToken , VerifyAdmin , VerifyAuthorization } = require('../utils/auth-middlewares');

const router = express.Router()

router.post('/', VerifyToken, cartControllers.createCart);

router.get('/', VerifyToken , VerifyAdmin, cartControllers.getCarts);

router.get('/:id', VerifyToken, VerifyAuthorization, cartControllers.getCartByUserId);

router.put('/:id', VerifyToken, VerifyAuthorization, cartControllers.updateCart);

router.delete('/:id',VerifyToken, VerifyAuthorization,  cartControllers.deleteCart);

module.exports = router
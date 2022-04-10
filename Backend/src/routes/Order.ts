import express from 'express';
const orderControllers = require('../controllers/Orders-Controller');
const { VerifyToken , VerifyAdmin , VerifyAuthorization } = require('../utils/auth-middlewares');

const router = express.Router()

router.post('/', VerifyToken, VerifyAuthorization, orderControllers.createOrder);

router.get('/', VerifyToken, VerifyAdmin, orderControllers.getOrders);

router.get('/sales', VerifyToken, VerifyAdmin, orderControllers.getMonthlyIncome);

router.get('/:id', VerifyToken, VerifyAuthorization, orderControllers.getOrderByUserId);

router.put('/:id', VerifyToken, VerifyAdmin, orderControllers.updateOrder);

router.delete('/:id', VerifyToken, VerifyAdmin, orderControllers.deleteOrder);

module.exports = router
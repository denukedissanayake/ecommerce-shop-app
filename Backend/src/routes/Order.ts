import express from 'express';
const orderControllers = require('../controllers/Orders-Controller');

const router = express.Router()

router.post('/', orderControllers.createOrder);

router.get('/', orderControllers.getOrders);

router.get('/sales', orderControllers.getMonthlyIncome);

router.get('/:id', orderControllers.getOrderByUserId);

router.put('/:id', orderControllers.updateOrder);

router.delete('/:id', orderControllers.deleteOrder);

module.exports = router
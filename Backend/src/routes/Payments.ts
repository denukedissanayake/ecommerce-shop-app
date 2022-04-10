import express from 'express';
const paymentController = require('../controllers/Payment-Controller');
const { VerifyToken } = require('../utils/auth-middlewares');

const router = express.Router()

router.post('/', VerifyToken, paymentController.doPayments);

module.exports = router
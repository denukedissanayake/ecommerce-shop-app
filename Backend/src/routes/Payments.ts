import express from 'express';
const paymentController = require('../controllers/Payment-Controller');

const router = express.Router()

router.post('/', paymentController.doPayments);

module.exports = router
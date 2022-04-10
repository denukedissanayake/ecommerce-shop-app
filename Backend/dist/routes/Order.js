"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orderControllers = require('../controllers/Orders-Controller');
const router = express_1.default.Router();
router.post('/', orderControllers.createOrder);
router.get('/', orderControllers.getOrders);
router.get('/sales', orderControllers.getMonthlyIncome);
router.get('/:id', orderControllers.getOrderByUserId);
router.put('/:id', orderControllers.updateOrder);
router.delete('/:id', orderControllers.deleteOrder);
module.exports = router;

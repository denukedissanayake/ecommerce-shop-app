"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orderControllers = require('../controllers/Orders-Controller');
const { VerifyToken, VerifyAdmin, VerifyAuthorization } = require('../utils/auth-middlewares');
const router = express_1.default.Router();
router.post('/', VerifyToken, VerifyAuthorization, orderControllers.createOrder);
router.get('/', VerifyToken, VerifyAdmin, orderControllers.getOrders);
router.get('/sales', VerifyToken, VerifyAdmin, orderControllers.getMonthlyIncome);
router.get('/:id', VerifyToken, VerifyAuthorization, orderControllers.getOrderByUserId);
router.put('/:id', VerifyToken, VerifyAdmin, orderControllers.updateOrder);
router.delete('/:id', VerifyToken, VerifyAdmin, orderControllers.deleteOrder);
module.exports = router;

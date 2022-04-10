"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const paymentController = require('../controllers/Payment-Controller');
const { VerifyToken } = require('../utils/auth-middlewares');
const router = express_1.default.Router();
router.post('/', VerifyToken, paymentController.doPayments);
module.exports = router;

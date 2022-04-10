"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cartControllers = require('../controllers/Cart-Controller');
const { VerifyToken, VerifyAdmin, VerifyAuthorization } = require('../utils/auth-middlewares');
const router = express_1.default.Router();
router.post('/', VerifyToken, cartControllers.createCart);
router.get('/', VerifyToken, VerifyAdmin, cartControllers.getCarts);
router.get('/:id', VerifyToken, VerifyAuthorization, cartControllers.getCartByUserId);
router.put('/:id', VerifyToken, VerifyAuthorization, cartControllers.updateCart);
router.delete('/:id', VerifyToken, VerifyAuthorization, cartControllers.deleteCart);
module.exports = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cartControllers = require('../controllers/Cart-Controller');
const router = express_1.default.Router();
router.post('/', cartControllers.createCart);
router.get('/', cartControllers.getCarts);
router.get('/:id', cartControllers.getCartByUserId);
router.put('/:id', cartControllers.updateCart);
router.delete('/:id', cartControllers.deleteCart);
module.exports = router;

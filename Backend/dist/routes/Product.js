"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productControllers = require('../controllers/Product-Controllers');
const router = express_1.default.Router();
router.post('/', productControllers.createProduct);
router.get('/', productControllers.getProducts);
router.get('/:id', productControllers.getProductById);
router.delete('/:id', productControllers.deleteProduct);
router.put('/:id', productControllers.updateProduct);
module.exports = router;

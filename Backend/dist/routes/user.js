"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userControllers = require('../controllers/User-Controller');
const { VerifyToken, VerifyAdmin, VerifyAuthorization } = require('../utils/auth-middlewares');
const router = express_1.default.Router();
router.get("/", VerifyToken, VerifyAdmin, userControllers.getAllUsers);
router.get("/stats", VerifyToken, VerifyAdmin, userControllers.userStats);
router.get('/:id', VerifyToken, VerifyAuthorization, userControllers.getUserById);
router.put('/:id', VerifyToken, VerifyAuthorization, userControllers.updateUser);
router.delete('/:id', VerifyToken, VerifyAuthorization, userControllers.deleteUser);
module.exports = router;

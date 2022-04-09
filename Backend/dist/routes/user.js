"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userControllers = require('../controllers/User-Controller');
const router = express_1.default.Router();
router.get("/", userControllers.getAllUsers);
router.get("/stats", userControllers.userStats);
router.get('/:id', userControllers.getUserById);
router.put('/:id', userControllers.updateUser);
router.delete('/:id', userControllers.deleteUser);
module.exports = router;

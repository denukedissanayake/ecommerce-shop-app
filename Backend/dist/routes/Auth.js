"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const router = express_1.default.Router();
const AuthController = require('../controllers/Auth-Controllers');
router.post('/signup', AuthController.signup);
router.post('/login', passport_1.default.authenticate('local', { failureRedirect: '/api/auth/login/unsuccess', successRedirect: '/api/auth/login/success' }));
router.get('/login/unsuccess', AuthController.UnuccessLogin);
router.get('/login/success', AuthController.SuccessLogin);
router.get('/logout', AuthController.Logout);
module.exports = router;

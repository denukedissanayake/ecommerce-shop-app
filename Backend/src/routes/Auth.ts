import express from 'express';
import passport from 'passport';
const router = express.Router()
const AuthController = require('../controllers/Auth-Controllers') 

router.post('/signup', AuthController.signup);

router.post('/login', passport.authenticate('local',
    { failureRedirect: '/api/auth/login/unsuccess', successRedirect: '/api/auth/login/success' }));

router.get('/login/unsuccess', AuthController.UnuccessLogin);

router.get('/login/success', AuthController.SuccessLogin);

router.get('/logout', AuthController.Logout);

module.exports = router
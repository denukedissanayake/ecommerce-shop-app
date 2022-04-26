import express from 'express';
import passport from 'passport';
const router = express.Router()
const AuthController = require('../controllers/Auth-Controller') 

router.post('/signup', AuthController.signup);

router.post('/login', AuthController.login);

router.get('/logout', AuthController.Logout);

module.exports = router


// TO BE Used in Future Developments

// router.post('/login', passport.authenticate('local',
//     { failureRedirect: '/api/auth/login/unsuccess', successRedirect: 'http://localhost:3000/' }));

// router.get('/login/unsuccess', AuthController.UnuccessLogin);

// router.get('/login/success', AuthController.SuccessLogin);
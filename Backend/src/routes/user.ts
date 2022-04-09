import express from 'express';
const userControllers = require('../controllers/User-Controller');


const router = express.Router()

router.get("/", userControllers.getAllUsers);

router.get("/stats", userControllers.userStats);

router.get('/:id', userControllers.getUserById);

router.put('/:id', userControllers.updateUser);

router.delete('/:id', userControllers.deleteUser);


module.exports = router
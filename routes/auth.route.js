const express = require('express')
const authController = require('../controllers/auth.controller')
const router = express.Router();

router.post('/user/register', authController.registerUser)
router.post('/user/login', authController.loginUser)
router.get('/user/logout', authController.logoutUser)

router.post('/foodpartner/register', authController.registerFoodpartner)
router.post('/foodpartner/login', authController.loginFoodPartner)
router.get('/foodpartner/logout', authController.logoutFoodpartner)

module.exports = router;
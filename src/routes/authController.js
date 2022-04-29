const { Router } = require('express');
const authController = require('../controllers/auth.controller');
const checkAuth = require('../middlewares/checkAuth');

const authController = Router();

authController.post('/signup', authController.signUp);
authController.post('/signin', authController.signIn);
authController.get('/signout', authController.signOut);
authController.get('/check', checkAuth, authController.checkAuth);

module.exports = authController;

const { Router } = require('express');
const checkAuth = require('../middlewares/checkAuth');
const { getAllMessages } = require('../controllers/message.controller');

const messageRouter = Router();

messageRouter.get('/', getAllMessages);

module.exports = { messageRouter };

const { Router } = require('express');
const { getAllTips } = require('../controllers/tips.controller');

const tipsRouter = Router();

tipsRouter.route('/').get(getAllTips);

module.exports = { tipsRouter };

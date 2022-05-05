const { Router } = require('express');
const usersController = require('../controllers/users.controller');
const checkAuth = require('../middlewares/checkAuth');
const checkAuthor = require('../middlewares/checkAuthor');
const upload = require('../middlewares/upload');

const usersRouter = Router();

usersRouter.get('/', checkAuth, usersController.getAllUsers);
usersRouter.route('/:id')
  .patch(upload.single('file'), checkAuth, checkAuthor, usersController.editUser)
  .get(usersController.getUser);

module.exports = usersRouter;

const { Router } = require('express');
const checkAuth = require('../middlewares/checkAuth');
const checkAuthor = require('../middlewares/checkAuthor');
const upload = require('../middlewares/upload');
const {
  getAll, addPost, deletePost, editPost, getOnePost,
} = require('../controllers/post.controller');

const postRouter = Router();

postRouter.get('/:id', getOnePost);
postRouter.get('/', getAll);
postRouter.post('/', checkAuth, upload.array('file', 3), addPost);
postRouter.delete('/:id', checkAuth, deletePost);
postRouter.patch('/:id', checkAuth, editPost);

module.exports = { postRouter };

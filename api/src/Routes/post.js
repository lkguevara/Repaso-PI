// requires
const { Router } = require('express');
const { createdPost, getPosts } = require('../handlers/postHandler');

// router
const postRouter = Router();

postRouter.post('/', createdPost);
postRouter.get('/', getPosts);

module.exports = postRouter;
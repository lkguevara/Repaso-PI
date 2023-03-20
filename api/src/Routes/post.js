// requires
const { Router } = require('express');
const { createPost,createUser } = require('../handlers/postHandler');

// router
const postRouter = Router();

postRouter.post('post', createPost);

postRouter.post('/users', createUser);



module.exports = postRouter;
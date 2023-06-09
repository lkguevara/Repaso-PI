// requires
const { Router } = require('express');

const postRouter = require('./post.js');
const usersRouter = require('./users.js');

// router
const mainRouter = Router();

// routes
mainRouter.use('/users', usersRouter);
mainRouter.use('/posts', postRouter);

module.exports = mainRouter;
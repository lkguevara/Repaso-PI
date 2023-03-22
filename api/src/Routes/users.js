// requires
const { Router } = require('express');
const { getUsersHandler, getDetailHandler, createUsersHandler } = require('../handlers/usersHandlers.js');

// router
const usersRouter = Router();

usersRouter.get('/', getUsersHandler);
usersRouter.get('/:id', getDetailHandler);
usersRouter.post('/', createUsersHandler);

module.exports = usersRouter;
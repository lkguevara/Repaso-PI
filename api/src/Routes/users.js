// requires
const { Router } = require('express');
const { getUsers, getDetail, createUsers } = require('../handlers/usersHandlers.js');

// router
const usersRouter = Router();

usersRouter.get('/', getUsers);
usersRouter.get('/:id', getDetail);
usersRouter.post('/', createUsers);

module.exports = usersRouter;
const MovieController = require('./movie.controller');
const UserController = require('./user.controller');
const express = require('express');
const router = express.Router();

const movieController = new MovieController(router);
const userController = new UserController(router);

module.exports = router;
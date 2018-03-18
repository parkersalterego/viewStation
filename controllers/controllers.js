const MovieController = require('./movie.controller');
const UserController = require('./user.controller');
const ShowController = require('./show.controller');
const express = require('express');
const router = express.Router();

const movieController = new MovieController(router);
const userController = new UserController(router);
const showController = new ShowController(router);

module.exports = router;
const MovieController = require('./movie.async.controller');
const express = require('express');
const router = express.Router();

const movieController = new MovieController(router);

module.exports = router;
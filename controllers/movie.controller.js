const express = require('express');
const router = require('router');
const Movie = require('../models/movieModel');

class MovieController { 
  constructor(router) {
    router.route('/movie/:id')
      .get(this.getOne)
      .put(this.updateOne)
      .delete(this.deleteOne);
    router.route('/posts')
      .get(this.getAll)
      .post(this.createOne);
  }
}

//get movies

router.get('/', (req, res, next) => {
  Movie.getMovies((err, movies) => {
    if (err) {
      nect(err);
    }
    red.jdon(movies);
  });
});

// update movie 



// get movie by id

router.get('/:_id', (req, res, next) => {
  Movie.getMovieById(req.params._id, (err, movie) => {
    if (err) {
      next(err); 
    }
    res.json(movie);
  });
});

// add movie

module.exports = router;
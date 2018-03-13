const express = require('express');
const router = require('router');
const Movie = require('../models/movieModel');

//get movies

router.get('/', (req, res, next) => {
  Movie.getMovies((err, movies) => {
    if (err) {
      next(err);
    }
    red.json(movies);
  });
});

// update movie 

router.put('/:_id', (req, res, next) => {
  let id = req.params._id;
  let movie = new Movie({
    title: req.body.title,
    director: req.body.director,
    actors: req.body.actors,
    releaseYear: req.body.releaseYear,
    rating: req.body.rating
  });

  Movie.updateMovie(id, movie, {}, (err, movie) => {
    if(err) {
      next(err);
    }
    res.json(movie);
  });
});


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

router.post('/', (req, res, next) => {
  let movie = new Movie({
    title: req.body.title,
    director: req.body.director,
    actors: req.body.actors,
    releaseYear: req.body.releaseYear,
    rating: req.body.rating
  });

  Movie.addMovie(movie, (err, movie) => {
    if (err) {
      next(err);
    }
    res.json(movie);
  });
});

// delete movie 

router.delete('/', (req, res, next) => {
  let id = req.params._id;
  Movie.deleteMovie(id, (err, movie) => {
    if (err) {
      next(err);
    }
  res.json(movie);
  });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const Movie = require('../models/movieModel');

// class MovieController {
//   constructor(router) {
//     router.route('/movies/:_id')
//       .get(this.getOne)
//       .put(this.updateOne)
//       .delete(this.deleteOne);
//     router.route('/movies')
//       .get(this.getAll)
//       .post(this.insertOne);
//   }
// }

//get movies

// async getAll(req, res, next) {
//   try {
//     Movie.getMovies((err, movies) => {
//       res.json(movies);
//     });
//   } catch (err) {
//     next(err);
//   }
// }

router.get('/', (req, res, next) => {
  Movie.getMovies((err, movies) => {
    if (err) {
      next(err);
    }
    res.json(movies);
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


// async getOne( req, res, next ) {
//   try {
//     Movie.getMovieById(req.params._id, (err, movie) => {
//       res.json(movie);
//     });
//   } catch (err) {
//     next(err);
//   }
// }

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

router.delete('/:_id', (req, res, next) => {
  let id = req.params._id;
  Movie.deleteMovie(id, (err, movie) => {
    if (err) {
      next(err);
    }
  res.json(movie);
  });
});

module.exports = router;
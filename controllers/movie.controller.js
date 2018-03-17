const express = require('express');
const Movie = require('../models/movieModel');

class MovieController {
  constructor(router) {
    router.route('/movies/:_id')
      .get(this.getOne)
      .put(this.updateOne)
      .delete(this.deleteOne);
    router.route('/movies')
      .get(this.getAll)
      .post(this.insertOne);
  }

  async getOne(req, res, next) {
    try {
      Movie.getMovieById(req.params._id, (err, movie) => {
        res.json(movie);
      });
    } catch (err) {
      next (err);
    }
  }

  async updateOne(req, res, next) {
    try {
      let id = req.params._id;
      let movie = new Movie({
        title: req.body.title,
        director: req.body.director,
        actors: req.body.actors,
        releaseYear: req.body.releaseYear,
        rating: req.body.rating
      });

      Movie.updateMovie(id, movie, {}, (err, movie) => {
        res.json(movie);
      });
    } catch (err) {
      next (err);
    }
  }

  async deleteOne(req, res, next) {
    try {
      let id = req.params._id;

      Movie.deleteMovie(id, (err, movie) => {
        res.json(movie);
      });
    } catch (err) {
      next (err);
    }
  }

  async getAll(req, res, next) {
    try {
      Movie.getMovies((err, movies) => {
        res.json(movies);
      });
    } catch (err) {
      next (err);
    }
  }

  async insertOne(req, res, next) {
    try {
      let movie = new Movie({
        title: req.body.title,
        director: req.body.director,
        actors: req.body.actors,
        releaseYear: req.body.releaseYear,
        rating: req.body.rating
      });

      Movie.addMovie(movie, (err, movie) => {
        res.json(movie);
      });
    } catch (err) {
      next (err);
    }
  }

}

module.exports = MovieController;
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
     await Movie.findById(req.params._id)
      .then(movie => res.json(movie));
    } catch (err) {
      next (err);
    }
  }

  async updateOne(req, res, next) {
    try {
      await Movie.findOneAndUpdate(req.params._id, req.body, {new: true})
        .then(movie => res.json(movie));
    } catch (err) {
      next(err);
    }
  }

  async deleteOne(req, res, next) {
    try {
      await Movie.remove({_id: req.params._id})
        .then(movie => res.json(movie));
      } catch (err) {
      next (err);
    }
  }

  async getAll(req, res, next) {
    try {
      await Movie.find()
        .then(movies => res.json(movies));
    } catch (err) {
      next (err);
    }
  }

  async insertOne(req, res, next) {
    try {
      await Movie.create(new Movie(req.body))
      .then(movie => res.json(movie))
    } catch (err) {
      next (err);
    }
  }

}

module.exports = MovieController;
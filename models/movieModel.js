const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({

});

const Movie = module.exports = mongoose.model('Movie', MovieSchema);

module.exports.addMovie = (movie, callback) => {
  Movie.create(movie, callback);
};

module.exports.getMovies = (callback, limit) => {
  Movie.find(callback).limit(limit);
};

module.exports.getMovieById = (id, callback) => {
  Movie.findById(id, callback);
};

module.exports.updateMovie = (id, movie, options, callback) => {
  let query = {_id: id};
  let update = {

  };

  Movie.findOneAndUpdate(query, update, options, callback);
};

module.exports.deleteMovie = (id, callback) => {
  let query = {_id: id};
  Movie.remove(query, callback);
};
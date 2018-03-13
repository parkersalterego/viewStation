const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title : {
    required: true,
    type: String
  },
  director: {
    required: true,
    type: String
  },
  actors: {
    required: true,
    type: String
  },
  releaseYear: {
    required: true,
    type: Number
  },
  rating: {
    required: true,
    type: Number
  }
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
    title: movie.title,
    director: movie.director,
    actors: movie.actors,
    releaseYear: movie.releaseYear,
    rating: movie.rating
  };

  Movie.findOneAndUpdate(query, update, options, callback);
};

module.exports.deleteMovie = (id, callback) => {
  let query = {_id: id};
  Movie.remove(query, callback);
};
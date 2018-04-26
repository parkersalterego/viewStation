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
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.addUser = (newUser, callback) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) {
        next(err);
      }
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

module.exports. getUserById = (id, callback) => {
  User.findById(id, callback);
};

module.exports.getUserByUsername = (username, callback) => {
  const query = {username: username};
  User.findOne(query, callback);
};

module.exports.comparePassword = (candidatePassword, hash, callback) => {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) {
      next(err);
    }
    callback(null, isMatch);
  });
};
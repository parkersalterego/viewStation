const express = require('express');
const User = require('../models/userModel');
const passport = require('passport');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class UserController {
  constructor(router) {
    router.route('/users/authenticate')
      .post(this.authenticateUser);
    router.route('/users/register')
      .post(this.registerUser);
  }

  // authenticate user
  async authenticateUser(req, res, next) {
    try {
      const username = req.body.username;
      const password = req.body.password;

      User.getUserByUsername(username, (err, user) => {
        if (err) {
          next(err);
        }
        if (!user) {
          return res.json({
            success: false,
            msg: 'User not found'
          });
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
          if (err) {
            next(err);
          }

          if (isMatch) {
            const token = jwt.sign(user, process.env.SECRET, {
              expiresIn: 604800 //1 week
            });

            res.json({
              success: true,
              token: 'Bearer ' + token,
              user: {
                id: user._id,
                username: user.username,
                email: user.email
              }
            });
          } else {
            return res.json({success: false, msg: 'Incorrect Username or Password'});
          }
        });
      });
    } catch (err) {
      next(err);
    }
  }

  // register user
  async registerUser(req, res, next) {
    try { 
      let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      });

      User.addUser(newUser, (err, user) => {
        if(err) {
          res.json({
            success: false, 
            msg: 'Failed to register user'
          });
        } else {
          res.json({
            success: true,
            msg: 'User registered'
          });
        }
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
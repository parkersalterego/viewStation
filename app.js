const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const logger = require('morgan');
const fs = require('fs');
const app = express();
require('dotenv').config();

app.set("env", process.env.NODE_ENV || "development");
app.set("host", process.env.HOST || "0.0.0.0");
app.set("port", process.env.PORT || 3000);

// routes 

// morgan logger
app.use(logger('dev'));

//cors middleware
app.use(cors());

// body parser middleware
app.use(bodyParser());

//passport middleware

//static folder
app.use(express.static(path.join(__dirname, 'public')));

//db connection
mongoose.connect(process.env.DATABASE);

mongoose.connection.on('connected', (req, res, next) => {
  console.log('Connected to database ' + process.env.DATABASE);
});

mongoose.connection.on('error', (err) => {
  console.log('Error connecting to database: ' + err);
});

// set route prefixes

// index route
app.get('/', (req, res, next) => {
  res.send('Invalid Endpoint');
});

// catch 404 and forward to err handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//dev error handler -- prints stacktrace
if(app.get('env') === 'developmenmt') {
  app.use((err, req, res, next) => {
    res.status(err.code || 500)
      .json({
        status: 'error',
        message: err
      });
  });
}

// production error handler -- no stacktrace
app.use((err, req, res, next) => {
  res.status(err.status || 500)
    .json({
      status: 'error',
      message: err.message
    });
});

// start server
app.listen(app.get("port"), () => {
  console.log('\n' + '*******************************');
  console.log('REST API listening on port ' + app.get("port"));
  console.log('*******************************' + '\n');
});

module.exports = app;
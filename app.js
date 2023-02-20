var createError = require('http-errors');
var express = require('express');
const helmet = require('helmet');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const errorHandler = require('./app/middlewares/errorHandler');
const notFoundHandler = require('./app/middlewares/notFoundHandler');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(morgan('combined')); // Logging
// app.use(helmet()); // Keamanan
app.use(cors()); // Cross-origin resource sharing
app.use(logger('dev'));
app.use(express.json()); // Parse JSON
app.use(express.urlencoded({ extended: false })); // Parse form data
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('', require('./app/api/tugas/router'));

// Parse form data// Error handling middleware
app.use(errorHandler);

// 404 Not Found middleware
app.use(notFoundHandler);

module.exports = app;

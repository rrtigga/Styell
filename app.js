var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
var scrape = require('./routes/scrape');
var facebookLogin = require('./routes/facebookLogin');
var connect = require('connect');
var sassMiddleware = require('node-sass-middleware');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var cors = require('cors');
var app = express();

// Connect to MongoDB
var mongodb = require('./modules/db');
mongodb.connect('mongodb://rrtigga:styell2016@ds119618.mlab.com:19618/styell', function () {
    console.log('Connected to MongoDB.');
});

//scraping test
app.get('/rohit', function(req, res){
  request('http://www.rohittigga.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body); // Show the HTML for the Google homepage.
    }
  })
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
     sassMiddleware({
         src: __dirname + '/sass', 
         dest: __dirname + '/public/stylesheets',
         prefix:  '/stylesheets',
         debug: true,         
     })
  );

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '')));

// use it before all route definitions

app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false
}));

app.use('/', routes);
app.use('/users', users);
app.use('/scrape', scrape);
app.use('/facebookLogin', facebookLogin);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
var express = require('express');
var router = express.Router();
var request = require('../node_modules/request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/feed', function(req, res, next) {
  res.render('feed', { title: 'Express' });
  console.log("feed is here");
});

router.get('/test', function(req, res, next) {
  res.send("lol");
});


module.exports = router;

var express = require('express');
var router = express.Router();
var request = require('../node_modules/request');
var User = require('../models/user');

router.post('/', function(req, res, next) {
  var userData = new User(req.body.userData);
  console.log(userData, "here is the userData");
  userData.save(function(err) {
    if (err) throw err;
    console.log('User saved successfully!');
  });
  res.json(userData);
});

module.exports = router;
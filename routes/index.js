var express = require('express');
var router = express.Router();
var request = require('../node_modules/request');

var Product = require('../models/product');

// create a new sample product
var sample = new Product({
  test: new Date().getTime()
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/feed', function(req, res, next) {
  res.render('feed', { title: 'Express' });
  console.log("feed is here");
});

router.get('/test', function(req, res, next) {
	// call the built-in save method to save to the database
	sample.save(function(err) {
	  if (err) throw err;

	  console.log('Product saved successfully!');
	});
	// get all the products
	Product.find({}, function(err, products) {
	  if (err) throw err;

	  // object of all the products
	  console.log(products, "printing all the products");
	});
  res.send("lol");
});


module.exports = router;

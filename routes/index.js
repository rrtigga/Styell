var express = require('express');
var router = express.Router();
var request = require('../node_modules/request');
var Product = require('../models/product');

var sample = new Product({
	imageURL: new Date().getTime(),
  productName: new Date().getTime(),
  productType: new Date().getTime(),
  price: new Date().getTime()
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/friend/:id', function(req, res, next) {
  req.id = "lol";
  res.send(req.params);
});

router.get('/feed', function(req, res, next) {
  res.render('feed', { title: 'Express' });
  console.log("feed is here");
});

router.get('/stores', function(req, res, next) {
  res.render('stores', { title: 'Express' });
  console.log("stores is here");
});

router.get('/profile/:profile', function(req, res, next) {
  let locals = {
    profile: req.params.profile
  };
  res.render('profile', locals);
});
 
router.get('/getProducts', function(req, res, next) {
  Product.find({}, function(err, products) {
    if (err) throw err;
      // object of all the products
      var productResults = products;
      //console.log(products, "printing all the products");
      res.json(productResults);
    });
});

module.exports = router;
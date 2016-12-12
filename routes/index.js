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

router.get('/feed', function(req, res, next) {
  res.render('feed', { title: 'Express' });
  console.log("feed is here");
});

router.get('/getProducts', function(req, res, next) {
    Product.find({}, function(err, products) {
      if (err) throw err;
      // object of all the products
      var productResults = products;
      console.log(products, "printing all the products");
      res.json(productResults);
    });
});


module.exports = router;

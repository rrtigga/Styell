var express = require('express');
var router = express.Router();
var request = require('../node_modules/request');
const scrapeIt = require('../node_modules/scrape-it');
var Product = require('../models/product');
var productSample;

router.post('/redbubble', function(req, res, next) {
	// Promise interface
	scrapeIt(req.body.productURL, {
	    imageURL: {
	    	selector: "img#main-image.work-hero_image",
	    	attr: "src"
	    },
	    productName: "h2.work-information_title",
	    productType: "h3.work-information_product-type",
	    price: "span.price.usd"
	}).then(page => {
	    productSample = new Product(page);
	    console.log(productSample);
	    productSample.save(function(err) {
		  if (err) throw err;
		  console.log('Product saved successfully!');
		});
	});

	res.send(productSample);
});
module.exports = router;
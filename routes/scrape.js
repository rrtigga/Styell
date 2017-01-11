var express = require('express');
var router = express.Router();
var request = require('../node_modules/request');
const scrapeIt = require('../node_modules/scrape-it');
var Product = require('../models/product');
var newProduct;

router.post('/redbubble', function(req, res, next) {
	// Promise interface
	var productURL = req.body.productURL;
	scrapeIt(productURL, {
	    imageURL: {
	    	selector: "img#main-image.work-hero_image",
	    	attr: "src"
	    },
	    productName: "h2.work-information_title",
	    productType: "h3.work-information_product-type",
	    price: "span.price.usd",
	    productURL: "span.price.usd"
	}).then(page => {
	    newProduct = new Product(page);
	    newProduct["productURL"] = productURL;
	    console.log(newProduct);
	    newProduct.save(function(err) {
		  if (err) throw err;
		  console.log('Product saved successfully!');
		});
	});
	res.send(newProduct);
});

router.post('/etsy', function(req, res, next) {
	// Promise interface
	var productURL = req.body.productURL;
	scrapeIt(productURL, {
	    imageURL: {
	    	selector: "#listing-image #image-main img",
	    	attr: "src"
	    },
	    productName: "body.reduced-webfonts #listing-page-cart h1",
	    productType: "h3.work-information_product-type",
	    price: "#listing-page-cart #listing-page-cart-inner #listing-price",
	    productURL: "button#ask-a-question data-message"
	}).then(page => {
	    newProduct = new Product(page);
	    newProduct["productURL"] = productURL;
	    console.log(newProduct);
	    newProduct.save(function(err) {
		  if (err) throw err;
		  console.log('Product saved successfully!');
		});
	});
	res.send(newProduct);
});

module.exports = router;
const scrapeIt = require('../node_modules/scrape-it');
var Product = require('../models/product');

function redbubbleScrape () {
	scrapeIt("http://www.redbubble.com/people/nadiacorfini/works/24003056-a-festive-mouse?grid_pos=5&p=classic-tee&ref=shop_grid", {
	    imageURL: {
	    	selector: "img#main-image.work-hero_image",
	    	attr: "src"
	    },
	    productName: "h2.work-information_title",
	    productType: "h3.work-information_product-type",
	    price: "span.price.usd"
	}).then(page => {
	    console.log(productSample);
	    var productSample = new Product(page);
	    productSample.save(function(err) {
		  if (err) throw err;
		  console.log('Product saved successfully!');
		});
	});
}
var express = require('express');
var router = express.Router();
var request = require('../node_modules/request');
const scrapeIt = require('../node_modules/scrape-it');


router.get('/', function(req, res, next) {
	// request('http://www.redbubble.com', function (error, response, body) {
	//     if (!error && response.statusCode == 200) {
	//     	console.log(body);
	//       	res.send(body); // Show the HTML for the Google homepage.
	//     }
 //  	})

	// Promise interface
	scrapeIt("http://www.redbubble.com/people/nadiacorfini/works/24003056-a-festive-mouse?grid_pos=5&p=classic-tee&ref=shop_grid", {
	    imageURL: {
	    	selector: "img#main-image.work-hero_image",
	    	attr: "src"
	    },
	    productName: "h2.work-information_title",
	    productType: "h3.work-information_product-type",
	    price: "span.price.usd"

	}).then(page => {
	    console.log(page);
	});

	// Callback interface
	// scrapeIt("http://ionicabizau.net", {
	//     // Fetch the articles
	//     articles: {
	//         listItem: ".article"
	//       , data: {
	//             // Get the article date and convert it into a Date object
	//             createdAt: {
	//                 selector: ".date"
	//               , convert: x => new Date(x)
	//             }

	//             // Get the title
	//           , title: "a.article-title"

	//             // Nested list
	//           , tags: {
	//                 listItem: ".tags > span"
	//             }

	//             // Get the content
	//           , content: {
	//                 selector: ".article-content"
	//               , how: "html"
	//             }
	//         }
	//     }
	//     // Fetch the blog pages
	//   , pages: {
	//         listItem: "li.page"
	//       , name: "pages"
	//       , data: {
	//             title: "a"
	//           , url: {
	//                 selector: "a"
	//               , attr: "href"
	//             }
	//         }
	//     }
	//     // Fetch some other data from the page
	//   , title: ".header h1"
	//   , desc: ".header h2"
	//   , avatar: {
	//         selector: ".header img"
	//       , attr: "src"
	//     }
	// }, (err, page) => {
	//     console.log(err || page);
	// });

});

module.exports = router;

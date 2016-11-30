// var request = require('request');
// request('http://www.rohittigga.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage.
//   }
// })
// console.log("after request");

var request = require('request');

var options = {
  url: 'http://www.rohittigga.com'
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
}

request(options, callback);
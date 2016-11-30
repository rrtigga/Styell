// var request = require('request');
// request('http://www.rohittigga.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage.
//   }
// })
// console.log("after request");
var request = require('request');
var cors = require('cors');
var express = require('express');
var app = express();
app.use(cors());
app.options('*', cors());

var options = {
  url: 'http://www.redbubble.com',
  withCredentials: false
};

function callback(error, response, body) {
	window.console.log("callback is being called");
  if (!error && response.statusCode == 200) {
    alert(body);
  } else {
  	window.console.log(error);
  }
}

request(options, callback);
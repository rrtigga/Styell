var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: {
    'clothingScrape' : __dirname+'/public/javascripts/clothingScrape.js',
    'jquery-scrolltofixed-min' : __dirname+'/public/javascripts/jquery-scrolltofixed-min.js'  
  },
  target: 'node',
  output: {
    path: path.join(__dirname, '/public/javascripts/bundle'),
    filename: '[name].js'
  },
  externals: nodeModules,
  plugins: [
  ],
  devtool: 'sourcemap'
}
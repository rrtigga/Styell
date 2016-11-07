var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');


module.exports = {
    entry: "./main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    plugins: [
        new CaseSensitivePathsPlugin()
    ],
     resolve: {
        modulesDirectories: ['./app/', './node_modules']
    }
}
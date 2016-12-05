var mongoose  = require('mongoose');
var Schema  = mongoose.Schema;

var ProductSchema = new Schema({
    test: String
}, {collection: 'products'});

module.exports = mongoose.model('products', ProductSchema);
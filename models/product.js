var mongoose  = require('mongoose');
var Schema  = mongoose.Schema;

var ProductSchema = new Schema({
    imageURL: String,
    productName: String,
    productType: String,
    price: String,
    productURL: String
}, {collection: 'products'});

module.exports = mongoose.model('products', ProductSchema);
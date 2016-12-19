var mongoose  = require('mongoose');
var Schema  = mongoose.Schema;

var UserSchema = new Schema({
    id: String,
    name: String,
    accessToken: String,
    email: String,
}, {collection: 'users'});

module.exports = mongoose.model('users', UserSchema);
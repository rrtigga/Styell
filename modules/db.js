(function () {
    var client = require('mongodb').MongoClient,
        mongodb;
 	var mongoose = require('mongoose');
    mongoose.Promise = global.Promise;

    module.exports =  {
        connect: function (dburl, callback) {
            client.connect(dburl,
                function (err, db) {
                    mongodb = db;
                    if(callback) { callback(); }
                });
            mongoose.connect(dburl);
        },
        db: function () {
            return mongodb;
        },
        close: function () {
            mongodb.close();
        }
    };
})();
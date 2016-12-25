var express = require('express');
var router = express.Router();

router.get('/stores', function(req, res, next) {
  res.render('start/stores', { title: 'Express' });
});

module.exports = router;

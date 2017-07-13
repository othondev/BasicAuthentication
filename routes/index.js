var express = require('express');
var router = express.Router();
var logger = require('morgan');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: logger });
});

module.exports = router;

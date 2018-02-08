var express = require('express');
var router = express.Router();
var ip=require('../serverLib/index').ip;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,ip:ip});
});

module.exports = router;

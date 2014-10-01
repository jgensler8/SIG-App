var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //res.render('index', { title: 'Express' });

  var object = {'hello':'world'};
  res.json(object);
});

module.exports = router;

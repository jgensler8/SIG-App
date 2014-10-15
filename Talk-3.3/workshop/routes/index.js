var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* REST API for our database. */
router.route('/???/:id')
.get(function(req, res, next)
{

})
.put(...)
.post(...)
.delete(...);

module.exports = router;

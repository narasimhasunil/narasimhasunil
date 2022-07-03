var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nodejs Express generator' });
});

router.get('/path1', (req, res) => {
  res.render('path1', {title: 'Chari'})
});

module.exports = router;

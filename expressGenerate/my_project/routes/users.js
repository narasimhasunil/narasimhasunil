var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.render('users', {title: 'Battu'});
});

router.get('/users/path2', function(req, res, next) {
  res.render('users', {title: 'dheratham dheratham'});
});


//router.get('/path1',(req, res)=>{
  //res.send('ra ra battu')
//});

module.exports = router;

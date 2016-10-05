var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/*GET About Me Page */
router.get('/About Me', function(req, res, next) {
  res.render('About Me', { title: 'About Me' });
});


module.exports = router;

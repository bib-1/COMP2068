var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Poudel Family' });
});

router.get('/bibek', function(req, res, next) {
  res.render('bibek', { title: 'Bibek Poudel' });
});

router.get('/benisha', function(req, res, next) {
  res.render('benisha', { title: 'Benisha Poudel' });
});

router.get('/kp', function(req, res, next) {
  res.render('kp', { title: 'Khadge Prasad' });
});

router.get('/kamala', function(req, res, next) {
  res.render('kamala', { title: 'Kamala Lamichhane' });
});


module.exports = router;

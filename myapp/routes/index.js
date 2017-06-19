var express = require('express');
var router = express.Router();

/* GET home page. */
var person={name:'shiwani Adhikary',age:20, college:'ku',sem:'6',course:'CE',con:'9843123519',fblink:'https://www.facebook.com/shiwani.adhikary',prof:'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-1/p160x160/17342611_10209393373416685_5759515855905472223_n.jpg?oh=01190ce27755603eec5836a84047acc6&oe=59C847C5'};
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',person });
});
router.get('/profile', function(req, res, next) {
    res.render('profile',{person});
});
router.get('/add', function(req, res, next) {
    res.render('add',{person});
});
router.get('/edit', function(req, res, next) {
    res.render('edit',{person});
});
module.exports = router;

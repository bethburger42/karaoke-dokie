var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', function(req, res) {
  res.render('index');
});


// router.get('/restricted', function(req, res) {
//   if (req.user) {
//     res.render('restricted');
//   } else {
//     req.flash('danger','You do not have permission to see this page');
//     res.redirect('/');
//   }
// });

module.exports = router;
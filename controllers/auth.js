var express = require('express');
var db = require('../models');
var passport = require('passport');
var router = express.Router();


router.post('/login',function(req,res){
  passport.authenticate('local', function(err, user, info) {
    if (user) {
      req.login(user, function(err) {
        if (err) throw err;
        req.flash('success', 'You are now logged in.');
        res.redirect('/');
      });
    } else {
      req.flash('danger', 'Error');
      res.redirect('/auth/login');
    }
  })(req, res);
});
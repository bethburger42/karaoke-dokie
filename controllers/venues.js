var express = require('express');
var db = require('../models');
var passport = require('passport');
var router = express.Router();

var yelp = require("yelp").createClient({
  consumer_key: process.env.YELP_CONSUMER_KEY, 
  consumer_secret: process.env.YELP_CONSUMER_SECRET,
  token: process.env.YELP_TOKEN,
  token_secret: process.env.YELP_TOKEN_SECRET
});

router.get("/", function(req, res) {
	// See http://www.yelp.com/developers/documentation/v2/search_api
	yelp.search({term: "karaoke", location: "Seattle", sort: 2, limit: 10, category_filter: "nightlife"}, function(error, data) {
	  console.log(error);
	  console.log(data);
	  res.render("venues", {data: data});
	  // res.send({data: data});
	});
});

module.exports = router;
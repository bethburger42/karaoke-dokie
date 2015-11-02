var express = require('express');
var session = require('express-session');
var app = express();

var yelp = require("yelp").createClient({
  consumer_key: process.env.YELP_CONSUMER_KEY, 
  consumer_secret: process.env.YELP_CONSUMER_SECRET,
  token: process.env.YELP_TOKEN,
  token_secret: process.env.YELP_TOKEN_SECRET
});

// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({term: "karaoke", location: "Seattle", sort: 2, limit: 10, category_filter: "nightlife"}, function(error, data) {
  console.log(error);
  console.log(data);
});

app.get('/', function(req, res) {
	res.render('index');
});

app.listen(3000);
var $ = require('cheerio')
var request = require('request')
var express = require('express');
var db = require('../models');
var router = express.Router();	
var async = require('async');
var passport = require('passport');


// router.get("/", function(req, res) {

// 	res.render("calendar");
// });

router.get("/", function(req, res) {
	console.log("WE'RE ON CALENDAR!!!!!!!!!");
	var searchDate = req.query.searchDate;
	var searchURL = "http://www.thestranger.com/events//" + searchDate + "?keywords=karaoke";
	console.log(searchURL);
	request(searchURL, function (err, resp, html){
		if(!err && resp.statusCode == 200) {
			var parsedHTML = $.load(html);
			var posts = parsedHTML("body").find(".calendar-post");
	    	var venueArray = [];
	    	console.log(posts);
	    	if (posts.length) {
	    		var l = posts.length;
	    		var post;
	    		for (var i=0;i<l;++i) {
	    			post = $(posts[i]);
	    			var venue = post.find(".calendar-post-venue a").text();
	    			var neighborhood = post.find(".calendar-post-neighborhood").text();
		    		var date = post.find(".calendar-post-date").text();
		    		venueArray.push({
		    			venue: venue,
		    			date: date,
		    			neighborhood: neighborhood
		    		});
	    		}
			}
	    	var venuesAndTimes = {venues: venueArray};
	    	res.render("calendar", venuesAndTimes);
		}
	})
});

module.exports = router;
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
	var searchDate = req.query.searchDate;
	var searchURL = "http://www.thestranger.com/events//" + searchDate + "?keywords=karaoke";
	request(searchURL, function (err, resp, html){
		if(!err && resp.statusCode == 200) {
			var parsedHTML = $.load(html);
			var posts = parsedHTML("body").find(".calendar-post");
	    	var venueArray = [];
	    	if (posts.length) {
	    		var l = posts.length;
	    		var post;
	    		for (var i=0;i<l;++i) {
	    			post = $(posts[i]);
	    			var venue = post.find(".calendar-post-venue a").text();
	    			var link = post.find(".calendar-post-venue a").attr("href");
	    			var neighborhood = post.find(".calendar-post-neighborhood").text();
		    		var date = post.find(".calendar-post-date").text();
		    		venueArray.push({
		    			venue: venue,
		    			link: link,
		    			neighborhood: neighborhood,
		    			date: date
		    		});
	    		}
			}
			
			
			
			// var dateFormat = $("searchDate").text();
			// var displayDate = $.datepicker.formatDate('MM dd, yy', new Date(dateFormat));

	    	var venuesAndTimes = {venues: venueArray, date: searchDate};
	    	res.render("calendar", venuesAndTimes);
	    	// console.log(venuesAndTimes);
		}
	})
});

module.exports = router;
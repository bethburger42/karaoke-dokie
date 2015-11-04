var $ = require('cheerio')
var request = require('request')
var express = require('express');
var db = require('../models');
var router = express.Router();	
var async = require('async');


router.get("/", function(req, res) {
	// var searchDate = req.query.userDate;
	var searchDate = "2015-11-08";
	var searchURL = "http://www.thestranger.com/events//" + searchDate + "?keywords=karaoke";
	request(searchURL, function (err, resp, html){
		if(!err && resp.statusCode == 200) {
			var parsedHTML = $.load(html);
	    	var venueArray = [];
	    	parsedHTML(".calendar-post-venue a").map(function(i, calvenue) {
		    	var text = $(calvenue).text();
		      	if(!(text)) return;
		      	venueArray.push(text);
	    	})

			var timeArray = [];
	    	parsedHTML(".calendar-post-date").map(function(i, caltime) {
		    	var text = $(caltime).text();
		      	if(!(text)) return;
		      	timeArray.push(text);
	    	})

	    	var venuesAndTimes = {venues: venueArray, times: timeArray};
	    	res.render("venues", {venues: venueArray, times: timeArray});
	    	res.send(venuesAndTimes);
		}
	})
});

module.exports = router;
var $ = require('cheerio')
var request = require('request')
var app = require('express')()

// app.get('/testpage', function(req, res){
//   request('http://gizmodo.com/', function (err, resp, html){
//     if(!err && resp.statusCode == 200) {
//       var parsedHTML = $.load(html)
//       var imageURLs = []
//       // WARNING - Callback parameters for map are in a different order for Cheerio
//       parsedHTML('img.lazy-loaded').map(function(i, link){
//         var src = $(link).attr('src')
//         // if(!(src) || !(src.match('.jpg')||src.match('.png'))) return
//         imageURLs.push(src)
//       })
//       // var imageTags = imageURLs.reduce(function(total, b){
//       //   return total + '<p><img src="'+ b +'" /></p>'
//       // }, '')
//       res.send(imageURLs)
//     }
//   })
// })

// app.get('/testpage', function(req, res){
//   request('http://gizmodo.com/', function (err, resp, html){
//     if(!err && resp.statusCode == 200) {
//       var parsedHTML = $.load(html)
//       var textArray = []
//       parsedHTML('.first-text').map(function(i, paragraph){
//         var text = $(paragraph).text()
//         if(!(text)) return
//         textArray.push(text)
//       })
//       res.send(textArray)
//     }
//   })
// })

// app.get('/testpage', function(req, res){
//   request('http://gizmodo.com/', function (err, resp, html){
//     if(!err && resp.statusCode == 200) {
//       var parsedHTML = $.load(html)
//       var textArray = []
//       parsedHTML('.headline').map(function(i, headline){
//         var text = $(headline).text()
//         if(!(text)) return
//         textArray.push(text)
//       })
//       res.send(textArray)
//     }
//   })
// })


app.get('/testpage', function(req, res) {
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
	    	res.send(venuesAndTimes);
		}
	})
});




// app.get('/testpage', function(req, res){
//   request('http://gizmodo.com/', function (err, resp, html){
//     if(!err && resp.statusCode == 200) {
//       var parsedHTML = $.load(html)
//       var linkArray = []
//       parsedHTML('.headline a').map(function(i, headline){
//         var text = $(headline).attr('href')
//         if(!(text)) return
//         linkArray.push(text)
//       })
//       var textArray = []
//       parsedHTML('.headline a').map(function(i, headline){
//         var text = $(headline).text()
//         if(!(text)) return
//         textArray.push(text)
//       })
//       var linksAndHeadlines = {links: linkArray, headlines: textArray}
//       res.send(linksAndHeadlines)
//     }
//   })
// })

// app.get('/testpage', function(req, res){
//   request('http://gizmodo.com/', function (err, resp, html){
//     if(!err && resp.statusCode == 200) {
//       var parsedHTML = $.load(html)
//       var imageURLs = []
//       parsedHTML('article img').map(function(i, link){
//         var src = $(link).data('src')
//         if(!(src) || !(src.match('.jpg')||src.match('.png'))) return
//         imageURLs.push(src)
//       })
//       // var imageTags = imageURLs.reduce(function(total, b){
//       //   return total + '<p><img src="'+ b +'" /></p>'
//       // }, '')
//       res.send(imageURLs)
//       // res.send(imageTags)
//     }
//   })
// })

app.listen(3000);
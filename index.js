var express = require('express');
var session = require('express-session');
var app = express();
var bodyParser = require("body-parser");
var ejsLayouts = require('express-ejs-layouts');
// var db = require("./models");

app.use(session({
 secret: 'keyboard cat',
 resave: false,
 saveUninitialized: true
}));

app.use(ejsLayouts);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index');
});

// app.use("/venues", require("./controllers/venues"));

// app.use("/calendar", require("./controllers/calendar"));

// app.use("/songs", require("./controllers/songs"));

app.listen(3000);
var express = require('express');
var session = require('express-session');
var app = express();
var passport = require('passport');
var strategies = require('./config/strategies');
var flash = require('connect-flash');
var bodyParser = require("body-parser");
var ejsLayouts = require('express-ejs-layouts');
var db = require("./models");
var path = require('path');


app.use(session({
 secret: 'iejsl5wnp284vw9g61abrod35xp37s',
 resave: false,
 saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(ejsLayouts);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');
app.use(flash());

passport.serializeUser(strategies.serializeUser);
passport.deserializeUser(strategies.deserializeUser);

passport.use(strategies.localStrategy);
passport.use(strategies.facebookStrategy);

app.use(function(req,res,next){
  res.locals.currentUser = req.user;
  res.locals.alerts = req.flash();
  next();
});

app.use('/auth', require('./controllers/auth'));
app.use('/', require('./controllers/index'));

app.use("/venues", require("./controllers/venues"));

app.use("/calendar", require("./controllers/calendar"));

// app.use("/songs", require("./controllers/songs"));

app.listen(process.env.PORT || 3000);
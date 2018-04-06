var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var session = require('express-session')

var auth = require('./routes/auth');
var config = require('./config');
var log = require('./lib/logHandler');
var log = require('./lib/logHandler');
var authenticate = require('./lib/authenticate');

var app = express();

log.info("Starting Authentication module");
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/app',express.static(path.join(__dirname, 'dist')));

log.info("Setting session");
app.use(session({
  secret: config.secret,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

// passport config
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  log.debug("Serialized user ",user);
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  log.debug("Deserialized user ",user);
  done(null, user);
});



app.use('/auth', auth);

app.use('/app/*', function (req,res){
  console.log("Catch all /app ");
  res.sendFile(path.join(__dirname, 'dist/index.html'));
})


// catch 404 and forward to error handler

app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  console.log("Error handling! ",err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  var msg="";

  switch(err.status){
    case 401: msg="Token verification error."; break;
    case 402: msg="Profile does not fit the ordinary user."; break;
    case 403: msg="No token provided!."; break;
  }

  res.status(err.status).json({success:false, status:err.status,msg:msg});
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

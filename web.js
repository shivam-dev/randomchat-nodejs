var http = require("http");
var path = require('path');
var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var db = require("./db");

db.once('connected', function() {
        console.log("Connected to database")
});

app.configure(function () {
  app.set('views',path.join(__dirname, './views'));
  app.set('view engine','jade');
  app.use(express.logger('dev'));
  app.use(express.cookieParser());
  app.use(express.session({secret:"1212121xxxx"}));
  app.use(express.urlencoded());
  app.use(express.bodyParser());
  app.use(express.json());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, "/public")));
});


require('./routes')(app);

var server  = http.createServer(app).listen(8080, function(){
	console.log("Express server is listening on port 8080");
});


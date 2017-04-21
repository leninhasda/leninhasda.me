var express = require('express');
var app = express();
var ejs  = require('ejs');
var compression  = require('compression');
// var end = (process.env.NODE_ENV || "development");
// config

//  set dirctory structure
var __appDir = __dirname + '/app';
var __publicDir = __dirname + '/public';
var __viewDir = __appDir + '/views';

var routes = require(__appDir+'/routes');
app.use(compression());
app.use(express.static(__publicDir));
// app.use('views', __viewDir);
//
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

var server = app.listen(3001);
routes.init(app);
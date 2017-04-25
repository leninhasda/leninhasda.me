var express = require('express');
var app = express();
var ejs  = require('ejs');
var compression  = require('compression');
// var end = (process.env.NODE_ENV || "development");
// config

//  set dirctory structure
var __serverDir = __dirname + '/server';
var __publicDir = __dirname + '/public';
// var __viewDir = __appDir + '/views';

var routes = require(__serverDir + '/routes');
app.use(compression());
app.use(express.static(__publicDir));
// app.use('views', __viewDir);
//
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);


app.set('port', 3000);
var server = app.listen(app.get('port'));
console.log()
routes.init(app);
app.get('*', function(req, res){
    res.sendFile(__publicDir+'/index.html');
});
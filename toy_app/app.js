var express = require('express');
var port = 3000;
var app = express();

let index = require('./index');

app.set('port', 3000);

app.listen(port, function(){
	console.log('server running');
});
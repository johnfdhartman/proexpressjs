var express = require('express');
var port = 3000;
var app = express();

app.get('/name/:userName', function(req, res) {
	res.status(200);
	res.set('Content-type', 'text/html');
	res.send('<html><body>' +
		'<h1> Hello ' + req.params.userName + '</h1>' +
		'</body></html>'
	);
});

app.listen(port, function() {
	console.log('server running');
});
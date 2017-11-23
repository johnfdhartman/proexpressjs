var express = require('express');

const index = (req, res) => {
	res.set('Content-type', 'text/html');
	res.send('<h1>hey</h1>');
};

export default index;
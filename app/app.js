
exports.serve = function(){

	var express = require("express");
	var app = require("./routes")(express());
	var config = require("./config");

	var port = config.port;
	app.listen(port, function() {
		console.log("Listening on port : " + port);
	});
	//require('opener')('http://localhost:'+port);
}

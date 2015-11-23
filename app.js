
exports.serve = function(){

	var express = require("express");
	var app = express();

	/* serves main page */
	app.get("/", function(req, res) {
		res.sendFile(__dirname+'/index.html')
	});

	/* Post metod sample*/
	app.post("/user/add", function(req, res) { 
		res.send("OK");
	});

	/* Serves assets */
	app.get(/^(.+)$/, function(req, res){ 
		res.sendFile( __dirname + req.params[0]); 
	});

	require('opener')('http://localhost:'+port);

	var port = process.env.PORT || 3000;
	app.listen(port, function() {
		console.log("Listening on port : " + port);
	});

}

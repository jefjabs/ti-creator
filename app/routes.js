
module.exports = function(app){

	/* serves main page */
	app.get("/", function(req, res) {
		res.sendFile(__dirname+'/views/index.html')
	});

	/* Post metod sample*/
	app.post("/user/add", function(req, res) { 
		res.send("OK");
	});

	/* Serves assets */
	app.get(/^(.+)$/, function(req, res){ 
		res.sendFile( __dirname + req.params[0]); 
	});

	return app;

}

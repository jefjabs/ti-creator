#!/usr/bin/env node

switch( process.argv[2] ){
	case "status":
		console.log("Status here");
		break;
	case "init":
		console.log("Initialize Here");
		break;
	case "serve":
	default:
		require('./app/app.js').serve();
		break;
}

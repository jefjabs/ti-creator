#!/usr/bin/env node

switch( process.argv[2] ){
	case "init":
		var ncp = require('ncp').ncp;
		ncp.limit = 16;
		break;
	default:
		var as = require('./app.js');
		as.run();
		break;
}

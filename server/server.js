'use strict'

const express    = require('express'),
	  path       = require('path');


let app  = express();
let port = process.env.PORT || 3000;

// allow cors from webpack dev
if ( process.env.NODE_ENV !== 'production' ) app.use( require('./webpack-cors') );

// serve static files
app.use(express.static( path.join(__dirname, '..', 'public') ));

// SERVER
app.listen(port);

console.log('Listening on port %d', port);
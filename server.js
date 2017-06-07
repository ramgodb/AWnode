// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// Set assets folder as public
app.use(express.static('assets'));

// import the routes
require("./routes")(app);

app.listen(8080, function(){
	console.log("App listening 8080...");
});
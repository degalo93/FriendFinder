var express = require("express");
var path = require("path");

// Sets up the Express App

var app = express();
var PORT = process.env.PORT || 8080;

require("./.routing/apiRoutes.js")(app);
require("./.routing/htmlRoutes.js")(app);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
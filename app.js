var express = require("express");
var app = express();
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mydb");

var Schema = mongoose.Schema;

var personSchema = new Schema({
	firstname: String,
	lastname: String,
	address: String
});

var Person = mongoose.model("Person", personSchema);

var port = process.env.PORT || 1200;

app.set("view engine", "ejs");

app.use("/assets", express.static(__dirname + "/public"));
app.use("/", function(req, res, next) {
	console.log("Request URL: " + req.url);
	next();
});

console.log(`Server Starting...`);

var htmlController = require("./controllers/htmlController")(app);
var apiController = require("./controllers/apiController")(app);

app.listen(port);

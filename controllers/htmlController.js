var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extender: false })
var mongoose = require("mongoose");
var Person = mongoose.model("Person");

module.exports = function(app) {
	app.get("/", function(req, res) {
		Person.find({}, function(err, data) {
			res.render("index", {data: data});
		})
	});

	app.get("/person/:id", function(req, res) {
		Person.findOne({_id: req.params.id}, function(err, data) {
			res.render("person", {
				person: data
			});
		});
	});

	app.post("/person", urlencodedParser, function(req, res) {
		Person({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			address: req.body.address
		}).save(function(err) {
			if (err) throw err;
			console.log(`New person: ${req.body.firstname} was saved.`)
		});

		res.redirect("/")
	});
}
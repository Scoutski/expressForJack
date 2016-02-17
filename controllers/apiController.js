var bodyParser = require("body-parser");

var jsonParser = bodyParser.json();

module.exports = function(app) {
	app.get("/api", function(req, res) {
		// retrieve information from the database.
		res.json({
			name: "John",
			surname: "Doe"
		});
	});

	app.post("/api/person", jsonParser, function(req, res) {
		// save to the database.
	})

	app.delete("/api/person/:id", function(req, res) {
		// delete from the database.
	})
}
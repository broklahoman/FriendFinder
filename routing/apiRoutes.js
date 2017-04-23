var data = require("../data/friends");


module.exports = function(app) {
	// when users hit a page display friend jsons from data folder
	app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  	});
	// push new friends from survey into friend array  
  	app.post("/api/friends", function(req, res) {
  	friendData.push(req.body);
	});
};




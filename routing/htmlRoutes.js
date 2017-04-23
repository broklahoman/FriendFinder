// include path dependency
var path = require("path");

// routing to html pages in the public folder

module.exports = function(app) {
  // route to home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
  // route to survey page   
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });
  // automatic route to home page
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

};


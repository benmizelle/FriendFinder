// Path Dependency
var path = require("path");

//========================================================================
// html routes
//========================================================================

module.exports = function (app){

    // gets the survey.html page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    // If no matching route is found default to home
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

};



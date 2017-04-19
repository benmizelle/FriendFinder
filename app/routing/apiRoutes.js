// Requires the data from the friends.js file
var friendsData = require("../data/friends");


//========================================================================
// api routes
//========================================================================
module.exports = function(app) {

    //gets data from the friends api
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    // allows user to post data to the api
    app.post("/api/friends", function(req, res) {

        friendsData.push(req.body);
        res.json(true);

    });


}
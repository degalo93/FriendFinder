var path = require("path");

var friend = require("../app/data/friends")

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        return res.json(friend);
    });

    app.post("/api/friends", function(req, res) {
        //need to make a var that reads the post 
        var newF = {
            name: req.body.name,
            photo: req.body.photo,
            score: []
        };

        var scoreArr

    });

    // Start our server so that it can begin listening to client requests.
    app.listen(PORT, function() {
        // Log (server-side) when our server has started
        console.log("Server listening on: http://localhost:" + PORT);
    });

}
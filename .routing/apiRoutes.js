var path = require("path");

var friend = require("../app/data/friends.js")

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        return res.json(friend);
    });

    app.post("/api/friends", function(req, res) {
        //need to make a var that reads and compares new posts to friends.js data

        var FriendScore = req.body.scores;
        var scoreArr = [];
        var bestMatch = 0;

        for (var i = 0; i < friend.length; i++) {
            var scoresDiff = 0;
            //run through scores to compare friends
            for (var j = 0; j < FriendScore.length; j++) {
                scoresDiff += (Math.abs(parseInt(friend[i].scores[j]) - parseInt(FriendScore[j])));
            }

            //push new score into scoresArray
            scoreArr.push(scoresDiff);
        }

        //after all friends are compared, find best match
        for (var i = 0; i < scoresArray.length; i++) {
            if (scoreArr[i] <= scoreArr[bestMatch]) {
                bestMatch = i;
            }
        }


        res.json(friend[bestMatch]);


        friend.push(req.body);
    });

    // Start our server so that it can begin listening to client requests.
    app.listen(PORT, function() {
        // Log (server-side) when our server has started
        console.log("Server listening on: http://localhost:" + PORT);
    });

}
var path = require("path");

var friends = require("../app/data/friends.js")

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        // Parse new friend input to get integers (AJAX post seemed to make the numbers strings)
        var newFriend = req.body

        var scoresArr = [];
        for (var i = 0; i < req.body.scores.length; i++) {
            scoresArr.push(parseInt(req.body.scores[i]))
        }
        newFriend.scores = scoresArr;


        // Cross check the new friend entry with the existing ones compArr will be the var to compare the data
        var compArr = [];
        for (var i = 0; i < friends.length; i++) {

            var currentComp = 0;
            for (var j = 0; j < newFriend.scores.length; j++) {
                currentComp += Math.abs(newFriend.scores[j] - friends[i].scores[j]);
            }
            compArr.push(currentComp);
        }
        //need to create something that will compare the scores then match with closest match
        var bestScore = 0;
        for (var i = 1; i < compArr.length; i++) {

            if (compArr[i] <= compArr[bestScore]) {
                bestScore = i;
            }

        }

        var bestMatch = friends[bestScore];



        res.json(bestMatch);


        friends.push(newFriend);

    });



}
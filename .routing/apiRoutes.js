var path = require("path");

var friend = require("../app/data/friends")

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        return res.json(friend);
    });

    app.post("/api/friends", function(req, res) {

        var newFriend = req.body.name;

        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

        console.log(newcharacter);

        characters.push(newcharacter);

        res.json(newcharacter);
    });


}
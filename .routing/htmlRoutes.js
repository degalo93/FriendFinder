var path = require("path");

module.exports = function(app) {

        app.get("/survey", function(req, res) {
            res.sendFile(path.join(__dirname, "../public/survey.html"));
        });

        app.get("/", function(req, res) {
            res.sendFile(path.join(__dirname, "../public/home.html"));
        });
    }
    // Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
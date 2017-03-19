var express = require("express");
var app = express();


app.get("/r/:subname", function(req, res) {
    res.send("Hi there, welcome a sub."+ req.params.subname);
});

app.get("/r/:subname/comments/:id/:title/", function(req, res) {
    res.send("Hi there, welcome a sub post with comments.");
});

app.get("/", function(req, res) {
    res.send("Hi there");
});


app.get("/bye", function(req, res) {
    res.send("Goodbye");
});

app.get("/dog", function(req, res) {
    res.send("WOOF!");
});

app.get("*", function(req, res) {
    res.send("STARMAN!");
});

app.listen(3000, function() {
    console.log("Serving dog demo on port 3000");
});
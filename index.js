var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", function(req, res) {
    res.render("home");
});

app.get("/testing/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("testing", {ANSWER: thing});
});

app.get("/posts", function(req, res) {
    var posts = [
        {title: "Post 1", author: "Susy" },
        {title: "Post 2", author: "Frank" },
        {title: "Post 3", author: "Sammy" }
    ];

    res.render("posts", {posts: posts});
});


app.get("/speak/:animal", function(req, res) {
    var name = req.params.animal;
    var sounds = {
        pig: "oink", 
        cow: "moo",
        dog: "woof woof",
        cat: "meow"
    };
    var sound = sounds[name];

    res.send("The "+ name + " Says " + sound);
});


app.get("/repeat/:word/:times", function(req, res){
    var word = req.params.word;
    var times = Number(req.params.times);
    var response = "";
    for(i = 0; i < times; i++) {
        response += word + " ";
    }
    res.send(response);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
});



app.listen(3000, function() {
    console.log("Serving dog demo on port 3000");
});
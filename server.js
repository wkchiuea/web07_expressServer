
const express = require("express");

const app = express();

// specify what would happen when browser get in touch with our server
// Route to / : location = home root
app.get("/", function(request, response) {
    response.send("<h1>Hello</h1>");
});

app.get("/contact", function(req, res) {
    res.send("Conact me at wkchiuea@gmail.com");
})

app.get("/about", function(req, res) {
    res.send("My name is Louis.");
    // __dirname: path of current folder -> absolute path
    res.sendFile(__dirname + "/index.html");
})

// app will listen to port 3000 for http request send to our server
app.listen(3000, function() {
    
});


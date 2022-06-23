
const express = require("express");

const app = express();

// specify what would happen when browser get in touch with our server
// / : location = root
app.get("/", function(request, response) {
    response.send("<h1>Hello</h1>");
});

// app will listen to port 3000 for http request send to our server
app.listen(3000, function() {
    
});


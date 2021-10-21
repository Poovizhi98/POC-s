var express = require("express");
var app = express();
var todoController = require("./controllers/todoController");


//set up template engine
app.set("view engine", "ejs");

//static files
app.use("/assets", express.static("./assets"));

todoController(app)

//listen to port
app.listen(3000);
console.log("You are listening to port 3000");
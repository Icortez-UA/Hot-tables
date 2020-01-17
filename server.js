// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// create table array 
var tables =[

];

// create waitlist array

var wait = [];

// routes

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
  });
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });


app.get("/api/tables", function(req, res) {
   return res.json(tables);
  });
app.get("/api/waitlist", function(req, res) {
    return res.json(wait);
  });

  // post data for tables 
  app.post("/api/tables",function(req, res){

  return  res.json(table);
})
  // post data for reservations send to table 
app.post("/api/waitlist",function(req, res){

    return res.json(waitList);
})
 app.post("/api/customerlist",function(req,res){
   console.log("works!");
    var customerNew = req.body;
    if(tables.length >= 5){
      wait.push(customerNew);
    }
    else{
      tables.push(customerNew);
    }
    res.json(customerNew);
 })

app.post("/api/clear", function(req,res){
   wait = [];
   tables= [];
});



  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
//Initializing and calling express application
var express = require('express');
var webservice = express();
const MongoClient = require('mongodb').MongoClient;

// listen to a particular port
var port = 8080
webservice.listen(port);
console.log("Listening to port " + port)

//static files(html) --- subtask 1
webservice.use(express.static(__dirname + '/public'));

// respond with "hello world", when a GET request is made to the hello page
webservice.get('/hello', function(req, res) {
    console.log("sending data to client");
    res.send('hello world!!');
})

require("cf-deployment-tracker-client").track();

//DB connection
const uri = "mongodb+srv://sit725:sit725@sit725.nzg9x.mongodb.net/Messagebox?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("Messagebox").collection("messages");
  // perform actions on the collection object
  collection.insertOne({message:'Hello world'})
  client.close();
});

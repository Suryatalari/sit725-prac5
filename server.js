//Initializing and calling express application
var express = require('express');
var webservice = express();
//Initialize MongoDB to send and retrieve data
const MongoClient = require('mongodb').MongoClient;

// listen to a particular port
var port = 8080;
webservice.listen(port);
console.log("Listening to port " + port);

//static files(html) --- subtask 1
webservice.use(express.static(__dirname + '/public'));

// respond with "hello world", when a GET request is made to the hello page
webservice.get('/hello', function(req, res) {
    console.log("sending data to client");
    res.send('hello world!!');
})

// respond with "Added message" notification, when a GET request is made to the message page
//This function sends the messages to mongoDB
webservice.get('/message',function(request,response){
    let message = request.query.message;
    insertMessage(message);
    response.send('Added message'+message);
})

//Activate retrieveMessages function to retrieve data from mongoDB
webservice.get('/Retrievemessages',function(request,response){
    retrieveMessages(response);
})

//mongoDB URI to access the remote database
const uri = "mongodb+srv://sit725:sit725@sit725.nzg9x.mongodb.net/Messagebox?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });


let collectionMessage;

//DB connection
client.connect(err => {
  collectionMessage = client.db("Messagebox").collection("messages");
})

//This function inserts data to DB
const insertMessage=(message)=>{
    collectionMessage.insertOne({message:message});
}

//This function retrieves data from DB
const retrieveMessages=(response)=>{
    collectionMessage.find().toArray(function(err,result){
        if(err) throw err;
        //console.log(result)
        response.send(result);
    })
}
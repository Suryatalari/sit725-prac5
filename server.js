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

webservice.get('/message',function(request,response){
    let message = request.query.message;
    insertMessage(message)
    response.send('Added message'+message)
})

webservice.get('/Retrievemessages',function(request,response){
    retrieveMessages(response);
})

require("cf-deployment-tracker-client").track();

const uri = "mongodb+srv://sit725:sit725@sit725.nzg9x.mongodb.net/Messagebox?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

//DB connection
let collectionMessage;

client.connect(err => {
  collectionMessage = client.db("Messagebox").collection("messages");
})

const insertMessage=(message)=>{
    collectionMessage.insertOne({message:message})
}

const retrieveMessages=(response)=>{
    collectionMessage.find().toArray(function(err,result){
        if(err) throw err;
        //console.log(result)
        response.send(result);
    })
}
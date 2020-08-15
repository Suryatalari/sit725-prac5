var express = require("express"),
    app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get("/test", function (request, response) {
  var user_name = request.query.user_name;
  response.end("Hello " + user_name + "!");
});

app.listen(port);
console.log("Listening on port ", port);

//endpoint to serve the journals
//endpoint to create a journal
//endpoint to update a journal with comment
/*
app.post('/products',(req,res)=>{

})
*/
app.get('/pro',(req,res)=>{
    let prod = [
        {
            Image: "some image",
            Description: "Bike",
            Date: 819278,
            Seller_name: "Teju"
        },
        {
            Image: "some image1",
            Description: "Bike1",
            Date: 8192718,
            Seller_name: "Teju"
        }
    ]
    res.send(prod)
})
/*
app.put('/products',(req,res)=>{
    
})
*/
//connect to the db
//DB to get the journal
//Db function to create a journal
//DB function to update a journal


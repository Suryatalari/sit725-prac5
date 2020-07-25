var express = require('express')
var rest_api = express()

// list to a particular port
rest_api.listen(3000)

//static files(html) --- subtask 1
rest_api.use(express.static(__dirname + '/public'))

// respond with "hello world" when a GET request is made to the hello page
rest_api.get('/hello', function (req, res) {
    console.log("sending data to client")   
    res.send('hello world!!')
})

//Addition --- subtask 2
let add_two_numbers = function(number1,number2){
    result = number1 + number2;
    return result
}

// respond with summation of 2 numbers
rest_api.get('/addition',function(request, response){
    let number_1 = parseFloat(request.query.number1)
    let number_2 = parseFloat(request.query.number2)
    console.log("The first number is:",number_1)
    console.log("The second number is:",number_2)
    let Total = add_two_numbers(number_1,number_2);
    console.log("sending the sum of 2 numbers",Total,"to the client.")   
    response.send('The total value after addition is:'+Total)
})
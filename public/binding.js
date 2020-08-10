//Execute this function when index page render is complete.
$(document).ready(function(){
    console.log("Ready")

    //Send messages from textfield to "/message" function, that sends them to mongoDB.
    //Binding button.
    $('#messagebtn').click(()=>{
        let message = $('#mes').val();
        console.log(message);
        let data = {
            message
        }
        //Sending data to /message function of server.js
        $.get('/message',data,function(){
        })
    })

    //Updating retrieved messages every 1 second.
    setInterval(function(){
        //Activate /Retrievemessages to get data from DB
        $.get('/Retrievemessages',function(messages){
            //Clear the output field first
            $('#messages_from_user').empty();
            //For every message found in DB
            messages.forEach((DB_data)=>{
                console.log(DB_data.message)
                //Display appended data.
                $('#messages_from_user').append('<div class="row">' + DB_data.message + '</div>')
            })
        })
    },1000)
    
})
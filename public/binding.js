$(document).ready(function(){
    console.log("Ready")

    //Send messages from textfield to "/message" function, that sends them to mongoDB.
    $('#messagebtn').click(()=>{
        let message = $('#mes').val();
        console.log(message);
        let data = {
            message
        }
        $.get('/message',data,function(){
        })
    })

//Keep appending the data whenever new data is added.
setInterval(function(){
    $.get('/Retrievemessages',function(messages){
        $('#messages_from_user').empty();
        messages.forEach((DB_data)=>{
            console.log(DB_data.message)
            $('#messages_from_user').append('<div class="row">' + DB_data.message + '</div>')
        })
    })
},1000)
    
})
const displayproducts = (products) => {
    let productspace = $('<div id="productspace" class="row col s12"></div>')
    products.forEach(function(list) {
        let listentry=$('<div class="row col s12 productspace">'+list.Description+'</div>')
        productspace.append(listentry)
    })
    $('#eBayprod').append(productspace)
}

const getproducts=()=>{
    $.get('/pro',(result)=>{
        displayproducts(result)
    })
} 



$(document).ready(function () {
    console.log('Ready')

    //bind the button
    $('#testButton').click(testButtonFunction)

    //test get call
    $.get('/test?user_name="Fantastic User"', (result) => {
        console.log(result)
    })

    //Map

    var map = L.map('mapid').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();

    //End of map    
    //Once everything is ready, get the journals
    getproducts()
})

const testButtonFunction = () => {
    alert('Thank you for clicking')
}




document.addEventListener('DOMContentLoaded', function() {
    const map = L.map('map').setView([44.6509, -63.5923], 3);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19, // Max zoom level for these tiles
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); // Add the tile layer to our map instance


//addEventListener for click?
//Modal vs image in popup vs new html page

$.getJSON("project_data.json", function(data) {
    let placeArray = data.places;
    let i = 0;
    let markers = []; 
    while (i < placeArray.length) {
        markers[i] = new L.marker(placeArray[i].coordinates);
        markers[i].addTo(map).bindPopup(placeArray[i].location + placeArray[i].image);  
        i++;
    }     
});


//function onClick(e) {
    //$("#myModal").modal("show");
}

);
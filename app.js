$.getJSON('http://data.seattle.gov/api/views/3k2p-39jp/rows.json?jsonp=callback&max_rows=25', function(results) {
    
    $.each.(result.data,function(i, value)  {
        //console.log{results['data'][i][16]});
        
        //address
        console.log(value[16])
        
        //time
        console.log(value[15])
        
        //discription
        console.log(value[12])
        
        //latitude, longitude
        console.log(value[21])
        console.log(value[20])
        
        L.marker([value[21], value[20]]).addTo(map)
        .bindPopup('<h3>'+ value[12] + '<h3>' + value[16]+ '<br>' + value[15]);
        
        });
    });
    
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('http://{s}.tile.cloudmade.com/61d2e95f748e4d1da82b12d461f5174e/997/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
}).addTo(map);



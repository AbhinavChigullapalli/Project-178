let latitude=22.7868542,longitude=88.3643296;

mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    center:[longitude, latitude],
    zoom:4
})

var img1 = document.querySelector('#taj-mahal')

var marker1 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([78.04212009579929,27.175318798211748])
.addTo(map)

map.addControl(
    new MapboxGeocoder({
        accessToken:mapboxgl.accessToken,
        mapboxgl:mapboxgl
    })
)
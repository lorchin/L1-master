function initMap() {
var mapId = document.getElementById('map');
var mapCenter = {
	lat: 36.173151,
	lng: -86.787209
};

var map = new google.maps.Map ( 
	mapId,
	{
	zoom: 17,
	center: mapCenter,
	fullscreenControl: false
}
);

var marker = new google.maps.Marker({
	position: mapCenter,
	map: map
});

var infoWindow = new google.maps.InfoWindow(
{
	content: "1001 5th Avenue North Nashville, TN 37219 USA"
}
);

marker.addEventListener('click', function () {
	infoWindow.open(map, marker);
});
}
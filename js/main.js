
var popup = document.getElementById('overlay');
var profileLink = document.getElementById('profile');
var close = document.getElementById('close');

function showPopup() {
	popup.classList.toggle('opened');
	if (($(window).width() < 1023)&&$(this).toggleClass('active')){
        $('#mobile-menu').toggle('open-menu');
        $('.mobile-btn').toggleClass('active');
		document.body.classList.toggle('nonScroll');
	}
	document.body.classList.toggle('nonScroll')
}
function closePopup() {
	popup.classList.toggle('opened');
	document.body.classList.toggle('nonScroll')
}
profileLink.addEventListener('click', showPopup);
close.addEventListener('click', closePopup);

$('.mobile-btn').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $('#mobile-menu').slideToggle("slow");
    document.body.classList.toggle('nonScroll');
});


function initMap() {
var mapId = document.getElementById('map');
var mapCenter = {
	lat: 36.175172, 
	lng: -86.778092
};

var coord = {
	lat: 36.173380,
	lng: -86.787027
};

var map = new google.maps.Map ( 
	mapId,
{
	zoom: 16,
	center: mapCenter,
	fullscreenControl: false
}
);
var infoWindow = new google.maps.InfoWindow({
          content: "1001 5th Avenue North Nashville, TN 37219 USA"
        });

var marker = new google.maps.Marker({
	position: coord,
	map: map,
	icon: "images/map-marker.png",
    draggable: true,
    animation: google.maps.Animation.DROP
});
    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
marker.addListener('click', function () {
	infoWindow.open(map, marker);
});
}
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function(position) {
//             var pos = {
//                 lat: position.coords.latitude,
//                 lng: position.coords.longitude
//             };
//
//             infoWindow.setPosition(pos);
//             infoWindow.setContent('Location found.');
//             map.setCenter(pos);
//         }, function() {
//             handleLocationError(true, infoWindow, map.getCenter());
//         });
//     } else {
//         // Browser doesn't support Geolocation
//         handleLocationError(false, infoWindow, map.getCenter());
//     }
// }
//
// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//     infoWindow.setPosition(pos);
//     infoWindow.setContent(browserHasGeolocation ?
//         'Error: The Geolocation service failed.' :
//         'Error: Your browser doesn\'t support geolocation.');
// }


$(".pagination li").click(function() {
    $(".pagination li").removeClass("active");
    $(this).addClass("active");
});
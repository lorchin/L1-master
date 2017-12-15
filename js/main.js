
var popup = document.getElementById('overlay');
var profileLink = document.getElementById('profile');
var close = document.getElementById('close');

function showPopup() {
	popup.classList.toggle('opened');
	if (mobileMenu.classList.contains('open-menu')){
		mobileMenu.classList.toggle('open-menu');
		activeMenu.classList.toggle('active');
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



var pie = document.getElementById('mobile');
var mobileMenu = document.getElementById('mobile-menu');
var activeMenu = document.querySelector('.mobile-btn');

function showMobileMenu() {
	mobileMenu.classList.toggle('open-menu');
	document.body.classList.toggle('nonScroll');
	activeMenu.classList.toggle('active')
}
pie.addEventListener('click',showMobileMenu);



// var slide1 = document.getElementById('slide1');
// var slide2 = document.getElementById('slide2');
// var slide3 = document.getElementById('slide3');
// var slide4 = document.getElementById('slide4');
// var slide5 = document.getElementById('slide5');

// var prevSlide = document.getElementById('prev');
// var nextSlide = document.getElementById('next');

// function showPrev() {
// 	slide5.classList.toggle('show');

// }

// function showNext() {
// 	slide2.classList.toggle('show');	

// }

// prevSlide.addEventListener('click', showPrev);
// nextSlide.addEventListener('click', showNext);







// var slides = document.querySelectorAll('#s1 .wrap');
// var currentSlide = 0;
// var slideInterval = setInterval(nextSlide,4000);
// function nextSlide() {
// slides[currentSlide].className = 'wrap';
// currentSlide = (currentSlide+1)%slides.length;
// slides[currentSlide].className = 'wrap show';
// }

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
	icon: "../images/map-marker.png"
});

marker.addListener('click', function () {
	infoWindow.open(map, marker);
});
}




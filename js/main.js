
var popup = document.getElementById("overlay");
var profileLink = document.getElementById("profile");
var close = document.getElementById("close");

function showPopup() {
	popup.classList.toggle("opened");
	document.body.classList.toggle("nonScroll")
}
function closePopup() {
	popup.classList.toggle("opened");
	document.body.classList.toggle("nonScroll")
}
profileLink.addEventListener('click', showPopup);

close.addEventListener('click', closePopup);






// var index = 0;

// var elems = [];
//     elems= document.getElementsByClassName ('slide');

// console.log(elems);

// function showPrev () {
// 	console.log (index);
// }
// // 	elems.forEach(function(elem) {
// //     elem.addEventListener("onmouseover", function(event) {
// //       console.log(event.target);
// //     });
// // })

// var profileLink = document.getElementsByClassName('profile-link')[0];
// console.log(profileLink)
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






var pos = 0;
//number of slides
var totalSlides = $('slider1').length;
$(document).ready(function(){
    $('.slider1').slick({
        prevArrow: "<span class='slick-prev'></span>",
        nextArrow: "<span class='slick-next'></span>"
    });
    countSlides();
});
function countSlides(){
    $('#counter').html(pos+1 + ' / ' + totalSlides);
}

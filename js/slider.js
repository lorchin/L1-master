$(document).ready(function(){
    $('.slider1').slick({
        prevArrow: "<span class='slick-prev'></span>",
        nextArrow: "<span class='slick-next'></span>",
        dots: false,

        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    })
});
$('.slider1')
    .on('beforeChange',function(event, slick, currentSlide, nextSlide) {

        var active = nextSlide + 1;
        var prev = active - 1;
        var next = active + 1;

        if (active === 1) {
            prev = slick.slideCount;
        }
        if (active === slick.slideCount) {
            next = 1;
        }

        $('#prev-slide').html(prev + '/' + slick.slideCount);
        $('#next-slide').html(next + '/' + slick.slideCount);
    })

    .on('init', function(event, slick) {
        $('#prev-slide').html(slick.slideCount + '/' + slick.slideCount);
        $('#next-slide').html(2 + '/' + slick.slideCount);

    });
// slider2
$(document).ready(function(){
    $(document).on('click', '.tabs a', function(e){
        e.preventDefault();
        var tabId = $(this).attr('href');
        $('.nav-link, .nav-tab').removeClass('is-active');
        $(this).addClass('is-active');
        $(tabId).addClass('is-active');
    });
});

$(document).ready(function() {
    $('.slider3').slick({
        dots: true,
        arrows: false
    });
});
$(document).ready(function() {
    $('.slider4').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false,

        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 427,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

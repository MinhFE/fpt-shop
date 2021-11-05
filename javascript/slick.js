$(document).ready(function ($) {
    $('.promotion_wrap').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: 1,
        autoplaySpeed: 1000,
        draggable: false,
        // infinite: false,
        prevArrow: "<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
});
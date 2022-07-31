$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 6,
        asNavFor: ".sliderbig",
    });
    $('.sliderbig').slick({
        arrows: false,
        asNavFor: ".slider",
        slidesToShow: 1,
    });
});


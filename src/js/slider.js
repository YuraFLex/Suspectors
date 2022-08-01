import $ from 'jquery';
import slick from 'slick-carousel';

$('.reviews__list').slick({
  arrows: false,
  asNavFor: '.reviews__pagination',
  slidesToShow: 1,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        infinite: false,
        arrows: true
      },
    },
  ],
});

$('.reviews__pagination').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.reviews__list',
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 7,
        infinite: false,
        arrows: false
      },
    },
  ],
});
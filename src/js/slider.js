$('.slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.sliderbig',
});

$('.sliderbig').slick({
  arrows: false,
  asNavFor: '.slider',
  slidesToShow: 1,
});

jQuery(document).ready(function () {
  if ($(window).width() < 992) {
    jQuery('.shop-right').slick({
      slidesToShow: 1,
      slidesToScroll: 1
    });

    jQuery('.burger').on('click', function() {
      jQuery(this).toggleClass('burger-active');
      jQuery('.header__menu').slideToggle(150);
    });
  }
});
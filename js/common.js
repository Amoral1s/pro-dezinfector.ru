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

  jQuery('.pdf-trigger').on('click', function() {
    jQuery('.overlay').fadeIn(200);
    jQuery('.popup-pdf').fadeIn(200);
  });

  jQuery('.goods-trigger').on('click', function() {
    jQuery('.overlay').fadeIn(200);
    jQuery('.popup-goods').fadeIn(200);
    var text = jQuery(this).prev().prev().prev().text() + ' ' + jQuery(this).prev().prev().text();

    jQuery('.popup-goods strong b').text(text);
    jQuery('.popup-goods input.hidden').val(text);
  });
  jQuery('.call-trigger').on('click', function() {
    jQuery('.overlay').fadeIn(200);
    jQuery('.popup-call').fadeIn(200);
  });

  jQuery('.close').on('click', function() {
    jQuery('.overlay').fadeOut(200);
    jQuery('.popup').fadeOut(200);
  });
  jQuery('.overlay').on('click', function() {
    jQuery('.overlay').fadeOut(200);
    jQuery('.popup').fadeOut(200);
  });

});
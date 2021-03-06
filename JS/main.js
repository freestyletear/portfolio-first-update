(function ($) {
  "use strict";

  if ($(".text-slider").length == 1) {
    var typed_strings = $(".text-slider-items").text();
    var typed = new Typed(".text-slider", {
      strings: typed_strings.split(","),
      typeSpeed: 80,
      loop: true,
      backDelay: 1100,
      backSpeed: 30,
    });
  }

  $(".hero-slider").slick({
    slidesToShow: 1,
    prevArrow: $(".themes-carousel-controls .prev"),
    nextArrow: $(".themes-carousel-controls .next"),
    autoplay: true,
    dots: false,
    autoplaySpeed: 7000,
    fade: true,
  });
})(jQuery);

// if ($("text-slider").length == 1) {
//   var typed_strings = $("text-slider-items").text();
//   var typed = new Typed("text-slider", {
//     strings: typed_strings.split(","),
//     typeSpeed: 80,
//     loop: true,
//     backDelay: 1100,
//     backSpeed: 30,
//   });
// }

// $(".hero-slider").slick({
//   slidesToShow: 1,
//   prevArrow: $(".themes-carousel-controls .prev"),
//   nextArrow: $(".themes-carousel-controls .next"),
//   autoplay: true,
//   dots: false,
//   autoplaySpeed: 7000,
//   fade: true,
// });

// init Isotope
var $grid = $(".portfolio-items").isotope({
  // options
});

// filter items on button click
$(".portfolio-menu ul").on("click", "li", function () {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({ filter: filterValue });

  // Remove and add 'active' class for filter buttons
  $(this).siblings(".active").removeClass("active");
  $(this).addClass("active");
});
// slick slider
$(".slick_slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 800,
  autoplaySpeed: 5000,
  nextArrow: false,
  prevArrow: false,
});
// slick slider2
$(".slick_slider2").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 800,
  autoplaySpeed: 5000,
  nextArrow: false,
  prevArrow: false,
});

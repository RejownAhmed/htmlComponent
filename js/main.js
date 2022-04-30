$(document).ready(function () {
  $('.product_carousel').slick({
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    lazyLoad: 'onprogress',
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 910,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 710,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});
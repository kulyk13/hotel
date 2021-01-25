const reviewSlider = new Swiper('.review-slider', {
    lazy: true,
    loop: true,
    navigation: {
        nextEl: '.slider-arrow-forward',
        prevEl: '.slider-arrow-back',
      },
    // Responsive breakpoints
    breakpoints: {
      // window >=768px
        320: {
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        },
      },
    });
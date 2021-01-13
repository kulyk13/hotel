const reviewSlider = new Swiper('.review-slider', {
    lazy: true,
    loop: true,
    navigation: {
        nextEl: '.slider-arrow-forward',
        prevEl: '.slider-arrow-back',
      },
    });
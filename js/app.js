burgerBtnOpen.onclick = () => burgerMenu.classList.add('open')
burgerBtnClose.onclick = () => burgerMenu.classList.remove('open')
// Swiper slider
const reviewSlider = new Swiper('.review-slider', {
  lazy: {
      loadPrevNext: true,
    },
  loop: true,
  navigation: {
      nextEl: '.slider-arrow-forward',
      prevEl: '.slider-arrow-back',
    },
  // Responsive breakpoints
  breakpoints: {
    // window >=320px
      320: {
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    },
  });

// Accordion
const accordions = document.querySelectorAll('.footer-top__list');

for (item of accordions) {
  item.addEventListener('click', function() {
    if(this.classList.contains('active')) {
      this.classList.remove('active');
    } else {
      for (el of accordions) {
        el.classList.remove('active');
      }
      this.classList.add('active');
    }
  })
}
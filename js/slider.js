//СЛАЙДЕР В INDEX-HERO
new Swiper ('.hero__slider',{
  simulateTouch: false,
  loop: false,
  autoplay: {
    delay: 4000,
    stopOnLastSlide: false,
    disableOnInteraction: false
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  speed: 2000
});

//СЛАЙДЕР В INDEX-PRICE
new Swiper ('.price__slider',{
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: 'true'
  },
  touchRatio: 2,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 50,
  slidesPerGroup: 1  
});

//СЛАЙДЕР В SERVICES
new Swiper ('.services__slider',{
  navigation: {
    nextEl: '.services__slider-next',
    prevEl: '.services__slider-prev'
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  speed: 2000,
  simulateTouch: false,
  loop: true,
});


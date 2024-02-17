import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export function contactsSliderInit() {
  const swiperElement = document.querySelector(".contacts__slider.swiper");

  if (swiperElement) {
    const swiper = new Swiper(swiperElement, {
      grabCursor: true,
      freeMode: true,
      navigation: {
        nextEl: ".contacts__slider .swiper__next",
        prevEl: ".contacts__slider .swiper__prev",
      },
      scrollbar: {
        el: ".contacts__slider .swiper-scrollbar",
      },
      breakpoints: {
        768: {
          slidesPerView: 1.25,
          spaceBetween: 5,
        },
        1440: {
          spaceBetween: 24,
          slidesPerView: 3,
        },
        1920: {
          spaceBetween: 40,
          slidesPerView: 3,
        },
      },
    });
  }
}

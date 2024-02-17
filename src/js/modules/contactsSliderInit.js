import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export function contactsSliderInit() {
  const swiperElement = document.querySelector(".contacts__slider.swiper");

  if (swiperElement) {
    const swiper = new Swiper(swiperElement, {
      slidesPerView: 3,
      spaceBetween: 40,
      grabCursor: true,
      freeMode: true,
      navigation: {
        nextEl: ".contacts__slider .swiper__next",
        prevEl: ".contacts__slider .swiper__prev",
      },
      scrollbar: {
        el: ".contacts__slider .swiper-scrollbar",
      },
    });
  }
}

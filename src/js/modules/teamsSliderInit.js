import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export function teamsSliderInit() {
  const swiperElement = document.querySelector(".teams__slider.swiper");

  if (swiperElement) {
    const swiper = new Swiper(swiperElement, {
      spaceBetween: 40,
      grabCursor: true,
      freeMode: true,
      navigation: {
        nextEl: ".heading__item--flex .swiper__next",
        prevEl: ".heading__item--flex .swiper__prev",
      },
      breakpoints: {
        320: {
          scrollbar: {
            slidesPerView: 1,
            el: ".teams__slider .swiper-scrollbar",
          },
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
          grid: {
            rows: 2,
            fill: "row",
          },
          scrollbar: {
            el: ".teams__slider .swiper-scrollbar",
          },
        },
        1440: {
          spaceBetween: 24,
          slidesPerView: 3.172,
        },
        1920: {
          slidesPerView: 4,
        },
      },
    });
  }
}

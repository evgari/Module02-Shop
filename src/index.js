import 'normalize.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/main.scss';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper(".offerSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 3,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  modules: [Navigation, Pagination],
});

const swiper2 = new Swiper(".trendsSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 3,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  modules: [Navigation, Pagination],
});

document.querySelector('.catalog__btn').addEventListener('click', e => {
  e.target.classList.toggle('catalog__btn_preloader');
});


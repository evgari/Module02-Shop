import 'normalize.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/main.scss';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper(".js-offer-swiper", {
  spaceBetween: 20,
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
  breakpoints: {
    321: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1001: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    }
  }
});

const swiper2 = new Swiper(".js-trends-swiper", {
  spaceBetween: 20,
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
  breakpoints: {
    321: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1001: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    }
  }
});

const swiper3 = document.querySelector('.js-category-list');

let mySwiper;

function mobileSlider() {
  if (window.innerWidth <= 768 && swiper3.dataset.mobile == 'false') {
    mySwiper = new Swiper(swiper3, {
      slidesPerView: 2,
      spaceBetween: 10,
      breakpoints: {
        501: {
          slidesPerView: 2.5,
          spaceBetween: 10,
        },
        601: {
          slidesPerView: 3,
          spaceBetween: 20,
        }
      },
    });

    swiper3.dataset.mobile = 'true';
  }

  if (window.innerWidth > 768) {
    swiper3.dataset.mobile = 'false';

    mySwiper.destroy();
  }
}

mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
});

document.querySelector('.catalog__btn').addEventListener('click', e => {
  e.target.classList.toggle('catalog__btn_preloader');
});


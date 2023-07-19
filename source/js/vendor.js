// Swiper 7.4.1
import Swiper, {Navigation, Pagination} from './vendor/swiper';
// import './vendor/focus-visible-polyfill';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


import * as myFunctions from './modules/functions.js';
import $ from 'jquery';
import Choices from 'choices.js';
import Swiper from 'swiper/bundle';
import 'ion-rangeslider';
import Inputmask from 'inputmask';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import { useDynamicAdapt } from './modules/dynamicAdapt.js';

myFunctions.isWebp();
myFunctions.isTouch();
gsap.registerPlugin(ScrollTrigger);
useDynamicAdapt();

const selects = document.querySelectorAll('.js-choice');
const apartmentsresetBtn = document.querySelector('.apartments__form-reset');

selects.forEach(function (item) {
  const choices = new Choices(item, {
    searchEnabled: false,
  });
  if (apartmentsresetBtn) {
    apartmentsresetBtn.addEventListener('click', function () {
      choices.setChoiceByValue('all')
    })
  }
});

 $('.range-price').ionRangeSlider({
  onStart: function (data) {
    $('.price-from').text(data.from);
    $('.price-to').text(data.to);
  },
  onChange: function (data) {
    $('.price-from').text(data.from);
    $('.price-to').text(data.to);
  },
  onUpdate: function (data) {
    $('.price-from').text(data.from);
    $('.price-to').text(data.to);
  },
});
const rangePrice = $('.range-price').data("ionRangeSlider");

$('.range-square').ionRangeSlider({
  onStart: function (data) {
    $('.square-from').text(data.from);
    $('.square-to').text(data.to);
  },
  onChange: function (data) {
    $('.square-from').text(data.from);
    $('.square-to').text(data.to);
  },
  onUpdate: function (data) {
    $('.square-from').text(data.from);
    $('.square-to').text(data.to);
  },
});
const rangeSquare = $('.range-square').data("ionRangeSlider");

$('.range-floor').ionRangeSlider({
  onStart: function (data) {
    $('.floor-from').text(data.from);
    $('.floor-to').text(data.to);
  },
  onChange: function (data) {
    $('.floor-from').text(data.from);
    $('.floor-to').text(data.to);
  },
  onUpdate: function (data) {
    $('.floor-from').text(data.from);
    $('.floor-to').text(data.to);
  },
});
const rangeFloor = $('.range-floor').data("ionRangeSlider");

$('.form__reset').on("click", function() {
  if(rangePrice) {
    rangePrice.reset();
  }
  if(rangeSquare) {
    rangeSquare.reset();
  }
  if(rangeFloor) {
    rangeFloor.reset();
  }
})



const bannerSlider = new Swiper('.banner__slider', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 3000,
  },
  loop: true,
});

const benefitsSlider = new Swiper('.benefits__slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
    },
  },
});

const layoutThumbsSlider = new Swiper('.layout-slider__thumbs', {
  slidesPerView: 3,
  spaceBetween: 16,
  grid: {
    fill: 'row',
    rows: 3,
  },
});

const layoutBigSlider = new Swiper('.layout-slider__big', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  thumbs: {
    swiper: layoutThumbsSlider,
  },
  allowTouchMove: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  speed: 700,
});

const benefitsSliderTotal = document.querySelector('.benefits__slider-total');
const benefitsSliderCurrentSlide = document.querySelector('.benefits__slider-current');
if (benefitsSliderTotal && benefitsSliderCurrentSlide) {
  benefitsSliderTotal.innerHTML = '0' + benefitsSlider.slides.length;
  benefitsSlider.on('slideChange', function () {
    let currentSlide = ++benefitsSlider.realIndex;
    benefitsSliderCurrentSlide.innerHTML = '0' + currentSlide;
  });
}

function toggleMobileMenu() {
  menu.classList.toggle('open');
  body.classList.toggle('noscroll');
  menuBtn.classList.toggle('clicked');
}
function closeMobileMenu() {
  menu.classList.remove('open');
  body.classList.remove('noscroll');
  menuBtn.classList.remove('clicked');
}
const menuBtn = document.querySelector('.menu-btn');
const body = document.body;
const menu = document.querySelector('.header__bottom');
const menuLinks = document.querySelectorAll('.header__menu-link');
const headerBtn = document.querySelector('.header__btn--mobile');
menuBtn.addEventListener('click', toggleMobileMenu);
menuLinks.forEach(function (el) {
  el.addEventListener('click', closeMobileMenu);
});
headerBtn.addEventListener('click', closeMobileMenu);

const footerTitles = document.querySelectorAll('.footer__item-title');
footerTitles.forEach(function (item) {
  item.addEventListener('click', function () {
    item.classList.toggle('open');
    if (item.classList.contains('open')) {
      item.nextElementSibling.style.maxHeight = item.nextElementSibling.scrollHeight + 'px';
    } else {
      item.nextElementSibling.style.maxHeight = null;
    }
  });
});

const layoutItemHeads = document.querySelectorAll('.layout__item-head');
layoutItemHeads.forEach(function (item) {
  item.addEventListener('click', function () {
    item.classList.toggle('open');
    if (item.classList.contains('open')) {
      item.nextElementSibling.style.maxHeight = item.nextElementSibling.scrollHeight + 'px';
    } else {
      item.nextElementSibling.style.maxHeight = null;
    }
  });
});

const detailsSwiper = document.querySelector('.details-slider');
let detailsSlider;
function mobileSliderDetails() {
  if (window.innerWidth <= 450 && detailsSwiper.dataset.mobile == 'false') {
    detailsSlider = new Swiper(detailsSwiper, {
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      breakpoints: {
        375: {
          slidesPerView: 'auto',
        },
      },
    });
    detailsSwiper.dataset.mobile = 'true';
  }
  if (window.innerWidth > 450) {
    detailsSwiper.dataset.mobile = 'false';
    if (detailsSwiper.classList.contains('swiper-initialized')) {
      detailsSlider.destroy();
    }
  }
}
if (detailsSwiper) {
  mobileSliderDetails();
  window.addEventListener('resize', mobileSliderDetails);
}

const buildSwiper = document.querySelector('.build__slider');
let buildSlider;
function mobileSliderBuild() {
  if (window.innerWidth <= 450 && buildSwiper.dataset.mobile == 'false') {
    buildSlider = new Swiper(buildSwiper, {
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      breakpoints: {
        375: {
          slidesPerView: 'auto',
        },
      },
    });
    buildSwiper.dataset.mobile = 'true';
  }
  if (window.innerWidth > 450) {
    buildSwiper.dataset.mobile = 'false';
    if (buildSwiper.classList.contains('swiper-initialized')) {
      buildSlider.destroy();
    }
  }
}
if (buildSwiper) {
  mobileSliderBuild();
  window.addEventListener('resize', mobileSliderBuild);
}

let inputsPhone = document.querySelectorAll("input[type='tel']");
Inputmask({ mask: '+380 (99) 999-99-99' }).mask(inputsPhone);

const showFiltersBtn = document.querySelector('.show-filters');
if (showFiltersBtn) {
  showFiltersBtn.addEventListener('click', function () {
    showFiltersBtn.classList.toggle('active');
    if (showFiltersBtn.classList.contains('active')) {
      showFiltersBtn.nextElementSibling.style.maxHeight = showFiltersBtn.nextElementSibling.scrollHeight + 'px';
    } else {
      showFiltersBtn.nextElementSibling.style.maxHeight = null;
    }
  });
}

// Анимации GSAP

if (window.innerWidth > 767.98) {
  const tlHeader = gsap.timeline();
  tlHeader.from('.header__top', { opacity: 0, duration: 1 });
  tlHeader.from('.header__menu-item', { opacity: 0, y: -10, duration: 1, stagger: 0.1 });
  tlHeader.from('.banner__box', { opacity: 0, duration: 1 }, '-=1');
  tlHeader.from('.banner__box-title', { opacity: 0, y: 30, duration: .5 });
  tlHeader.from('.banner__box-text', { opacity: 0, y: 30, duration: .5 });

  gsap.from('.layout', {
    opacity: 0,
    duration: 2.5,
    scrollTrigger: {
      trigger: '.layout',
      toggleActions: 'restart',
    },
  });
  gsap.from('.benefits', {
    opacity: 0,
    duration: 2.5,
    scrollTrigger: {
      trigger: '.benefits',
      toggleActions: 'restart',
    },
  });

  gsap.from('.layout-slider', {
    opacity: 0,
    duration: 2.5,
    scrollTrigger: {
      trigger: '.layout-slider',
      toggleActions: 'restart',
    },
  });

  gsap.from('.about', {
    opacity: 0,
    duration: 2.5,
    scrollTrigger: {
      trigger: '.about',
      toggleActions: 'restart',
    },
  });

  gsap.from('.info', {
    opacity: 0,
    duration: 2.5,
    scrollTrigger: {
      trigger: '.info',
      toggleActions: 'restart',
    },
  });

  gsap.from('.details', {
    opacity: 0,
    duration: 2.5,
    scrollTrigger: {
      trigger: '.details',
      toggleActions: 'restart',
    },
  });

  gsap.from('.build', {
    opacity: 0,
    duration: 2.5,
    scrollTrigger: {
      trigger: '.build',
      toggleActions: 'restart',
    },
  });

  gsap.from('.contacts', {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.contacts',
      toggleActions: 'restart',
    },
  });

  gsap.from('.connect', {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: '.connect',
      toggleActions: 'restart',
    },
  });

  gsap.from('.apartments', {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: '.apartments',
      toggleActions: 'restart',
    },
  });

  gsap.from('.pantries', {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: '.pantries',
      toggleActions: 'restart',
    },
  });

  gsap.from('.footer', {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: '.footer',
      toggleActions: 'restart',
    },
  });
}

const apartmentSlider = new Swiper('.apartment-gallery__slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  observer: true,
  observeSlideChildren: true,
  observeParents: true,
});

const galleryBtns = document.querySelectorAll('.apartment-gallery__btn');
const tabContents = document.querySelectorAll('.apartment-gallery__content-item');

galleryBtns.forEach(function (item) {
  item.addEventListener('click', function () {
    let tabId = item.getAttribute('data-tab');
    let currentContent = document.querySelector(tabId);
    galleryBtns.forEach(function (item) {
      item.classList.remove('active');
    });
    item.classList.add('active');
    tabContents.forEach(function (el) {
      el.classList.remove('active');
    });
    currentContent.classList.add('active');
  });
});

const similarSwiper = document.querySelector('.similar__box');
let similarSlider;
function mobileSliderSimilar() {
  if (window.innerWidth <= 767 && similarSwiper.dataset.mobile == 'false') {
    similarSlider = new Swiper(similarSwiper, {
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      breakpoints: {
        375: {
          slidesPerView: 'auto',
        },
      },
    });
    similarSwiper.dataset.mobile = 'true';
  }
  if (window.innerWidth > 767) {
    similarSwiper.dataset.mobile = 'false';
    if (similarSwiper.classList.contains('swiper-initialized')) {
      similarSlider.destroy();
    }
  }
}
if (similarSwiper) {
  mobileSliderSimilar();
  window.addEventListener('resize', mobileSliderSimilar);
}

const pantriesShowBtns = document.querySelectorAll('.pantries__show-btn');
pantriesShowBtns.forEach(function (item) {
  item.addEventListener('click', function () {
    item.classList.toggle('active');
    item.parentElement.classList.toggle('open');
    if (item.parentElement.classList.contains('open')) {
      item.parentElement.nextElementSibling.style.maxHeight = item.parentElement.nextElementSibling.scrollHeight + 'px';
      item.parentElement.nextElementSibling.style.marginTop = 48 + 'px';
      item.parentElement.nextElementSibling.style.marginBottom = 24 + 'px';
    } else {
      item.parentElement.nextElementSibling.style.maxHeight = null;
      item.parentElement.nextElementSibling.style.marginTop = null;
      item.parentElement.nextElementSibling.style.marginBottom = null;
    }
  });
});

menuLinks.forEach(function (item) {
  if (window.location.pathname.indexOf(item.getAttribute('href')) > -1) {
    menuLinks.forEach(function (el) {
      el.classList.remove('header__menu-link--active');
    });
    item.classList.add('header__menu-link--active');
  }
});
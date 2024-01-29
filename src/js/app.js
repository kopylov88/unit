import * as myFunctions from './modules/functions.js';
import $ from 'jquery';
import Choices from 'choices.js';
import 'ion-rangeslider';
import Inputmask from 'inputmask';
import { useDynamicAdapt } from './modules/dynamicAdapt.js';
import { gsapAnimations } from './modules/gsap.js';
import { sliders } from './modules/sliders.js';

myFunctions.isWebp();
myFunctions.isTouch();

useDynamicAdapt();
gsapAnimations();
sliders();

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

$('.form__reset').on("click", function () {
  if (rangePrice) {
    rangePrice.reset();
  }
  if (rangeSquare) {
    rangeSquare.reset();
  }
  if (rangeFloor) {
    rangeFloor.reset();
  }
})

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

const galleryBtns = document.querySelectorAll('.apartment-gallery__btn');
const tabContents = document.querySelectorAll('.apartment-gallery__content-item');

galleryBtns.forEach(function (item) {
  item.addEventListener('click', function () {
    let tabId = item.getAttribute('data-tab');
    let currentContent = document.querySelector(tabId);
    if (!item.classList.contains('active')) {
      galleryBtns.forEach(function (item) {
        item.classList.remove('active');
      });
      item.classList.add('active');
      tabContents.forEach(function (el) {
        el.classList.remove('active');
      });
      currentContent.classList.add('active');
    }
  });
});
if (document.querySelector('.apartment-gallery__btn')) {
  document.querySelector('.apartment-gallery__btn').click();
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

document.querySelector('.header__menu-link').classList.add('header__menu-link--active');

menuLinks.forEach(function (item) {
  if (window.location.pathname.indexOf(item.getAttribute('href')) > -1) {
    menuLinks.forEach(function (el) {
      el.classList.remove('header__menu-link--active');
    });
    item.classList.add('header__menu-link--active');
  }
});
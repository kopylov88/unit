import * as myFunctions from './modules/functions.js';
import Choices from 'choices.js';
import noUiSlider from 'nouislider';
import Inputmask from 'inputmask';
import { useDynamicAdapt } from './modules/dynamicAdapt.js';
import Swiper from 'swiper/bundle';
import barba from '@barba/core';
import { gsap } from 'gsap';

myFunctions.isWebp();
myFunctions.isTouch();

useDynamicAdapt();

const menuBtn = document.querySelector('.menu-btn');
const body = document.body;
const menu = document.querySelector('.header__bottom');
const navLinks = document.querySelectorAll('.link');

navLinks.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
  })
})

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
  body.classList.toggle('noscroll');
  menuBtn.classList.toggle('clicked');
});
navLinks.forEach(function (el) {
  el.addEventListener('click', () => {
    menu.classList.remove('open');
    body.classList.remove('noscroll');
    menuBtn.classList.remove('clicked');
  });
});

document.querySelector('.header__menu-link').classList.add('header__menu-link--active');

const selects = document.querySelectorAll('.js-choice');

selects.forEach(function (item) {
  const choices = new Choices(item, {
    searchEnabled: false,
    allowHTML: true,
  });
});

function markActiveLink() {
  navLinks.forEach(function (item) {
    if (window.location.pathname.indexOf(item.getAttribute('href')) > -1) {
      navLinks.forEach(function (el) {
        el.classList.remove('header__menu-link--active');
      });
      item.classList.add('header__menu-link--active');
    }
  });
}

function homePage() {
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

  //Пагинация для benefits slider

  const benefitsSliderTotal = document.querySelector('.benefits__slider-total');
  const benefitsSliderCurrentSlide = document.querySelector('.benefits__slider-current');
  if (benefitsSliderTotal && benefitsSliderCurrentSlide) {
    benefitsSliderTotal.innerHTML = '0' + benefitsSlider.slides.length;
    benefitsSlider.on('slideChange', function () {
      let currentSlide = ++benefitsSlider.realIndex;
      benefitsSliderCurrentSlide.innerHTML = '0' + currentSlide;
    });
  }

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

  const selects = document.querySelectorAll('.js-choice');
  selects.forEach(function (item) {
    const choices = new Choices(item, {
      searchEnabled: false,
      allowHTML: true,
    });
  });
}

function apartmentsPage() {
  const apartmentsShowFiltersBtn = document.querySelector('.apartments-show-filters');
  if (apartmentsShowFiltersBtn) {
    apartmentsShowFiltersBtn.addEventListener('click', function () {
      apartmentsShowFiltersBtn.classList.toggle('active');
      if (apartmentsShowFiltersBtn.classList.contains('active')) {
        apartmentsShowFiltersBtn.nextElementSibling.style.maxHeight = apartmentsShowFiltersBtn.nextElementSibling.scrollHeight + 'px';
      } else {
        apartmentsShowFiltersBtn.nextElementSibling.style.maxHeight = null;
      }
    });
  }

  const priceRangeSlider = document.querySelector('.filter-price__range');

  if (priceRangeSlider) {
    const input0 = document.getElementById('input-apartments-0');
    const input1 = document.getElementById('input-apartments-1');
    const inputs = [input0, input1];

    noUiSlider.create(priceRangeSlider, {
      start: [2500000, 6000000],
      step: 1,
      connect: true,
      range: {
        'min': [2500000],
        'max': [6000000]
      }
    });
    priceRangeSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = Math.round(values[handle])
    });

    const setPriceRangeSlider = function (i, value) {
      let arr = [null, null];
      arr[i] = value;
      priceRangeSlider.noUiSlider.set(arr);
    }
    inputs.forEach(function (el, index) {
      el.addEventListener('change', function (e) {
        setPriceRangeSlider(index, e.currentTarget.value)
      })
    })
  }

  const areaRangeSlider = document.querySelector('.filter-area__range');

  if (areaRangeSlider) {
    const input2 = document.getElementById('input-apartments-2');
    const input3 = document.getElementById('input-apartments-3');
    const inputs = [input2, input3];

    noUiSlider.create(areaRangeSlider, {
      start: [32, 150],
      connect: true,
      range: {
        'min': 32,
        'max': 150
      }
    });
    areaRangeSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = Math.round(values[handle])
    });
    const setAreaRangeSlider = function (i, value) {
      let arr = [null, null];
      arr[i] = value;
      areaRangeSlider.noUiSlider.set(arr);
    }
    inputs.forEach(function (el, index) {
      el.addEventListener('change', function (e) {
        setAreaRangeSlider(index, e.currentTarget.value)
      })
    })
  }

  const floorRangeSlider = document.querySelector('.filter-floor__range');

  if (floorRangeSlider) {
    const input4 = document.getElementById('input-apartments-4');
    const input5 = document.getElementById('input-apartments-5');
    const inputs = [input4, input5];

    noUiSlider.create(floorRangeSlider, {
      start: [1, 20],
      connect: true,
      range: {
        'min': 1,
        'max': 20
      }
    });
    floorRangeSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = Math.round(values[handle])
    });
    const setFloorRangeSlider = function (i, value) {
      let arr = [null, null];
      arr[i] = value;
      floorRangeSlider.noUiSlider.set(arr);
    }
    inputs.forEach(function (el, index) {
      el.addEventListener('change', function (e) {
        setFloorRangeSlider(index, e.currentTarget.value)
      })
      el.addEventListener('input', function (e) {
        setFloorRangeSlider(index, e.currentTarget.value)
      })
    })
  }

  const selects = document.querySelectorAll('.js-choice');
  const filterResetBtn = document.querySelector('.form__reset--apartments');

  selects.forEach(function (item) {
    const choices = new Choices(item, {
      searchEnabled: false,
      allowHTML: true,
    });

    if (filterResetBtn) {
      filterResetBtn.addEventListener('click', function () {
        choices.setChoiceByValue('all');
      })
    }
  });

  if (filterResetBtn) {
    filterResetBtn.addEventListener('click', function () {
      priceRangeSlider.noUiSlider.reset();
      areaRangeSlider.noUiSlider.reset();
      floorRangeSlider.noUiSlider.reset();
    })
  }
}

function apartmentPage() {
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
}

function pantriesPage() {
  const pantriesShowFiltersBtn = document.querySelector('.pantries-show-filters');
  if (pantriesShowFiltersBtn) {
    pantriesShowFiltersBtn.addEventListener('click', function () {
      pantriesShowFiltersBtn.classList.toggle('active');
      if (pantriesShowFiltersBtn.classList.contains('active')) {
        pantriesShowFiltersBtn.nextElementSibling.style.maxHeight = pantriesShowFiltersBtn.nextElementSibling.scrollHeight + 'px';
      } else {
        pantriesShowFiltersBtn.nextElementSibling.style.maxHeight = null;
      }
    });
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

  const priceRangeSlider = document.querySelector('.filter-price__range--pantries');

  if (priceRangeSlider) {
    const input0 = document.getElementById('input-pantries-0');
    const input1 = document.getElementById('input-pantries-1');
    const inputs = [input0, input1];

    noUiSlider.create(priceRangeSlider, {
      start: [300000, 600000],
      step: 1,
      connect: true,
      range: {
        'min': [300000],
        'max': [600000]
      }
    });
    priceRangeSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = Math.round(values[handle])
    });

    const setPriceRangeSlider = function (i, value) {
      let arr = [null, null];
      arr[i] = value;
      priceRangeSlider.noUiSlider.set(arr);
    }
    inputs.forEach(function (el, index) {
      el.addEventListener('change', function (e) {
        setPriceRangeSlider(index, e.currentTarget.value)
      })
    })
  }

  const areaRangeSlider = document.querySelector('.filter-area__range--pantries');

  if (areaRangeSlider) {
    const input2 = document.getElementById('input-pantries-2');
    const input3 = document.getElementById('input-pantries-3');
    const inputs = [input2, input3];

    noUiSlider.create(areaRangeSlider, {
      start: [5, 12],
      connect: true,
      range: {
        'min': 5,
        'max': 12
      }
    });
    areaRangeSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = Math.round(values[handle])
    });
    const setAreaRangeSlider = function (i, value) {
      let arr = [null, null];
      arr[i] = value;
      areaRangeSlider.noUiSlider.set(arr);
    }
    inputs.forEach(function (el, index) {
      el.addEventListener('change', function (e) {
        setAreaRangeSlider(index, e.currentTarget.value)
      })
    })
  }

  const filterResetBtn = document.querySelector('.form__reset--pantries');
  if (filterResetBtn) {
    filterResetBtn.addEventListener('click', function () {
      priceRangeSlider.noUiSlider.reset();
      areaRangeSlider.noUiSlider.reset();
    })
  }

  const selects = document.querySelectorAll('.js-choice');
  selects.forEach(function (item) {
    const choices = new Choices(item, {
      searchEnabled: false,
      allowHTML: true,
    });
  });
}

markActiveLink();

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

let inputsPhone = document.querySelectorAll("input[type='tel']");
Inputmask({ mask: '+380 (99) 999-99-99' }).mask(inputsPhone);

barba.init({
  transitions: [{
    name: 'opacity-transition',
    leave(data) {
      return gsap.to(data.current.container, {
        opacity: 0,
        duration: .25
      });
    },
    enter(data) {
      return gsap.from(data.next.container, {
        opacity: 0,
        duration: .25
      });
    }
  }],
  views: [{
    namespace: 'home',
    afterEnter() {
      homePage();
    }
  },
  {
    namespace: 'apartments',
    afterEnter() {
      apartmentsPage();
    }
  },
  {
    namespace: 'apartment',
    afterEnter() {
      apartmentPage();
    }
  },
  {
    namespace: 'pantries',
    afterEnter() {
      pantriesPage();
    }
  },
  ]
});

barba.hooks.enter((data) => {
  markActiveLink();
});




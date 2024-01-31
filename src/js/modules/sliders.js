import Swiper from 'swiper/bundle';

export function sliders() {
  const bannerSlider = new Swiper('.banner__slider', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    // autoplay: {
    //   delay: 3000,
    // },
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



